import { AirRequest, IRequestManager } from "@airport/arrivals-n-departures"
import { Api } from "@airport/check-in"
import { Inject, Injected } from "@airport/direction-indicator"
import { SituationIdeaApi } from "@votecube/votecube"
import { ReplyDao } from "../dao/ReplyDao"
import { ReplyRatingDao } from "../dao/ReplyRatingDao"
import { ReplyTypeDao } from "../dao/ReplyTypeDao"
import { Reply } from "../ddl/Reply"
import { ReplyRating } from "../ddl/ReplyRating"
import { ReplyType } from "../ddl/ReplyType"

@Injected()
export class ReplyApi {

    @Inject()
    situationIdeaApi: SituationIdeaApi

    @Inject()
    replyDao: ReplyDao

    @Inject()
    replyRatingDao: ReplyRatingDao

    @Inject()
    replyTypeDao: ReplyTypeDao

    @Inject()
    airRequest: AirRequest

    @Inject()
    requestManager: IRequestManager

    @Api()
    async addReply(
        reply: Reply
    ): Promise<void> {
        await this.replyDao.save(reply)
    }

    @Api()
    async getRepliesForSituationThread(
        situationThreadUuId: string
    ): Promise<Reply[]> {
        return await this.replyDao.findForSituationThread(situationThreadUuId)
    }

    @Api()
    async addIdea(
        reply: Reply
    ): Promise<void> {
        await this.situationIdeaApi.add(reply.situationIdea)
        await this.addReply(reply)
    }

    @Api()
    async rateReply(
        replyRating: ReplyRating
    ): Promise<void> {
        if (replyRating.rating > 0) {
            replyRating.rating = 1
        } else if (replyRating.rating < 0) {
            replyRating.rating = -1
        } else {
            replyRating.rating = 0
        }

        const reply = await this.replyDao.findByUuId(replyRating.reply.uuId, true)

        const existingReplyRating: ReplyRating = await this.replyRatingDao.findForReplyAndUser(
            replyRating.reply, (await this.requestManager.getRequest()).user)

        let numberOfDownRatingsDelta = 0
        let numberOfUpRatingsDelta = 0
        if (existingReplyRating) {
            switch (existingReplyRating.rating) {
                case -1:
                    switch (replyRating.rating) {
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
                    switch (replyRating.rating) {
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
                    switch (replyRating.rating) {
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
            existingReplyRating.rating = replyRating.rating
            replyRating = existingReplyRating
        }


        await this.replyRatingDao.save(replyRating)

        await this.replyDao.updateRatingTotals(
            numberOfUpRatingsDelta, numberOfDownRatingsDelta, reply)
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
    async addReplyType(
        reply: Reply,
        type: 'comment' | 'experience' | 'idea' | 'question'
    ): Promise<void> {
        const existingReplyTypes = await this.replyTypeDao.getAllForReply(reply.uuId)
        for (const existingReplyType of existingReplyTypes) {
            if (existingReplyType.type === type) {
                return
            }
        }
        const replyType: ReplyType = {
            actor: this.airRequest.actor,
            reply,
            repository: reply.repository,
            type
        } as any

        await this.replyTypeDao.save(replyType)
        reply.replyTypes.push(replyType as any)
    }

}