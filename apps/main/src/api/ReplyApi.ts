import { byId, exists, oneOfNumbers } from "@airbridge/validate"
import {
    AirRequest,
    RequestManager
} from "@airport/arrivals-n-departures"
import { Api } from "@airport/check-in"
import {
    Inject,
    Injected
} from "@airport/direction-indicator"
import { SituationIdeaApi } from "@votecube/votecube"
import { ReplyDao } from "../dao/ReplyDao"
import { ReplyRatingDao } from "../dao/ReplyRatingDao"
import { SituationThreadDao } from "../dao/SituationThreadDao"
import { Reply } from "../ddl/Reply"
import { ReplyRating } from "../ddl/ReplyRating"
import { SituationThread } from "../ddl/SituationThread"
import { ReplyDvo } from "../dvo/ReplyDvo"
import { ReplyRatingDvo } from "../dvo/ReplyRatingDvo"

@Injected()
export class ReplyApi {

    @Inject()
    situationIdeaApi: SituationIdeaApi

    @Inject()
    replyDao: ReplyDao

    @Inject()
    replyDvo: ReplyDvo

    @Inject()
    replyRatingDao: ReplyRatingDao

    @Inject()
    replyRatingDvo: ReplyRatingDvo

    @Inject()
    airRequest: AirRequest

    @Inject()
    requestManager: RequestManager

    @Inject()
    situationThreadDao: SituationThreadDao

    @Api()
    async addReply(
        reply: Reply
    ): Promise<void> {
        const existingSituationThread = await this.situationThreadDao
            .findOne(reply.situationThread, true)
        if (!existingSituationThread) {
            return
        }
        let existingParentReply
        if (reply.parentReply) {
            existingParentReply = await this.replyDao.findOne(reply)
            if (!existingParentReply) {
                return
            }
        }
        reply.numberOfDownRatings = 0
        reply.numberOfUpRatings = 0
        this.situationThreadDao.updateReplyTypeTotals(reply.isIdea ? 1 : 0,
            reply.isExperience ? 1 : 0, reply.isQuestion ? 1 : 0,
            existingSituationThread)

        await this.replyDao.save(reply)
    }

    @Api()
    async getRepliesForSituationThread(
        situationThreadId: string | SituationThread
    ): Promise<Reply[]> {
        return await this.replyDao.findForSituationThread(situationThreadId)
    }

    @Api()
    async rateReply(
        replyRating: ReplyRating
    ): Promise<void> {
        // TODO: passed in but not validated properties throw errors
        // passed in relations are ignored and are removed, this is OK
        // since the object is copied at API passing time
        // On the way back all changes are copied over to the original
        // object that was passed into the API and the objects removed
        // by validation are left intact (on the original, passed in object) 
        await this.replyRatingDvo.validate(replyRating, {
            reply: exists(byId()),
            upOrDownRating: oneOfNumbers(-1, 0, 1)
        })

        const existingReplyRating: ReplyRating = await this.replyRatingDao.findForReplyAndUser(
            replyRating.reply, this.requestManager.userAccount)

        let numberOfDownRatingsDelta = 0
        let numberOfUpRatingsDelta = 0
        if (existingReplyRating) {
            switch (existingReplyRating.upOrDownRating) {
                case -1:
                    switch (replyRating.upOrDownRating) {
                        case -1:
                            break
                        case 0:
                            numberOfDownRatingsDelta = -1
                            break
                        case 1:
                            numberOfDownRatingsDelta = -1
                            numberOfUpRatingsDelta = 1
                            break
                    }
                    break
                case 0:
                    switch (replyRating.upOrDownRating) {
                        case -1:
                            numberOfDownRatingsDelta = 1
                            break
                        case 0:
                            break
                        case 1:
                            numberOfUpRatingsDelta = 1
                            break
                    }
                    break
                case 1:
                    switch (replyRating.upOrDownRating) {
                        case -1:
                            numberOfDownRatingsDelta = 1
                            numberOfUpRatingsDelta = -1
                            break
                        case 0:
                            numberOfUpRatingsDelta = -1
                            break
                        case 1:
                            break
                    }
                    break
            }
            existingReplyRating.upOrDownRating = replyRating.upOrDownRating
            replyRating = existingReplyRating
        }


        await this.replyRatingDao.save(replyRating)

        await this.replyDao.updateUpOrDownRatingTotals(
            numberOfUpRatingsDelta, numberOfDownRatingsDelta, replyRating.reply)
    }

    // FIXME: Recompute all ratings and urgencies for a SituationThread when it's loaded
    // Do this only in non-server environments since the counts can be widely off across
    // different save branches
    @Api(
        // { server: false }
    )
    async updateCounts(
        situationThreadUuId: string
    ): Promise<void> {
        // const replies = this.replyDao.findAllForSituationThread(situationThreadUuId);

        // const ideaReplyUrgencies = ideaReplyUrgencyDao.findAllForSituationThread(situationThreadUuId);
        // const replyRatings = replyRatingDao.findAllForSituationThread(situationThreadUuId);

        // // Recompute all counts

        // await this.replyDao.save(replies)
    }


    @Api()
    async setReplyType(
        reply: Reply,
        type: 'experience' | 'idea' | 'question'
    ): Promise<void> {
        const existingSituationThread = await this.situationThreadDao
            .findOne(reply.situationThread, true)
        if (!existingSituationThread) {
            return
        }
        const existingReply = await this.replyDao.findOne(reply, true)
        if (!existingReply) {
            return
        }
        let isExperience = existingReply.isExperience
        let isIdea = existingReply.isIdea
        let isQuestion = existingReply.isQuestion
        let numberOfIdeasDelta = 0
        let numberOfExperiencesDelta = 0
        let numberOfQuestionsDelta = 0
        switch (type) {
            case 'experience':
                if (isExperience) {
                    return
                }
                isExperience = true
                numberOfExperiencesDelta = 1
                break
            case 'idea':
                if (isIdea) {
                    return
                }
                isIdea = true
                numberOfIdeasDelta = 1
                break
            case 'question':
                if (isQuestion) {
                    return
                }
                isQuestion = true
                numberOfQuestionsDelta = 1
                break
        }

        await this.replyDao.setReplyType(isIdea, isExperience, isQuestion, reply)
        await this.situationThreadDao.updateReplyTypeTotals(numberOfIdeasDelta,
            numberOfExperiencesDelta, numberOfQuestionsDelta,
            existingSituationThread)
    }

}