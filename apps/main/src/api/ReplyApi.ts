import { AirRequest } from "@airport/arrivals-n-departures"
import { Api } from "@airport/check-in"
import { Inject, Injected } from "@airport/direction-indicator"
import { ISituationIdea, SituationIdeaApi } from "@votecube/votecube"
import { IdeaReplyUrgencyDao } from "../dao/IdeaReplyUrgencyDao"
import { ReplyDao } from "../dao/ReplyDao"
import { ReplyRatingDao } from "../dao/ReplyRatingDao"
import { ReplyTypeDao } from "../dao/ReplyTypeDao"
import { IdeaReplyUrgency } from "../ddl/IdeaReplyUrgency"
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
    ideaReplyUrgencyDao: IdeaReplyUrgencyDao

    @Inject()
    replyTypeDao: ReplyTypeDao

    @Inject()
    airRequest: AirRequest

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
        reply: Reply,
        situationIdea: ISituationIdea
    ): Promise<void> {
        await this.situationIdeaApi.add(situationIdea)
        await this.addReply(reply)
    }

    @Api()
    async rateReply(
        replyRating: ReplyRating
    ): Promise<void> {
        if (replyRating.actor.user.uuId !== this.airRequest.user.uuId) {
            throw new Error(`ReplyRating does not belong to the request user: "${this.airRequest.user.uuId}"`)
        }

        if (replyRating.rating > 0) {
            replyRating.rating = 1
        } else if (replyRating.rating < 0) {
            replyRating.rating = -1
        } else {
            replyRating.rating = 0
        }

        const replyRatings: ReplyRating[] = await this.replyRatingDao.findAllForReply(replyRating.reply.uuId)

        let numberOfDownRatings = 0
        let numberOfUpRatings = 0
        let userPreviouslyRated = false

        for (const existingReplyRating of replyRatings) {
            if (replyRating.actor.user.uuId === existingReplyRating.actor.user.uuId) {
                existingReplyRating.rating = replyRating.rating
                replyRating = existingReplyRating
                userPreviouslyRated = true
            }
            if (existingReplyRating.rating < 0) {
                numberOfDownRatings++
            } else if (existingReplyRating.rating > 0) {
                numberOfUpRatings++
            }
        }
        if (!userPreviouslyRated) {
            if (replyRating.rating < 0) {
                numberOfDownRatings++
            } else if (replyRating.rating > 0) {
                numberOfUpRatings++
            }
        }

        const reply = await this.replyDao.findByUuId(replyRating.reply.uuId)

        await this.replyRatingDao.save(replyRating)

        reply.numberOfDownRatings = numberOfDownRatings
        reply.numberOfUpRatings = numberOfUpRatings

        await this.replyDao.save(reply)
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
    async setReplyUrgency(
        ideaReplyUrgency: IdeaReplyUrgency
    ): Promise<void> {
        // if(ideaReplyUrgency.urgency < )
        const reply: Reply = await this.replyDao.findByUuId(ideaReplyUrgency.reply.uuId)

        const ideaReplyUrgencies = await this.ideaReplyUrgencyDao
            .findAllForReply(ideaReplyUrgency.reply.uuId)

        await this.replyRatingDao.save(ideaReplyUrgency)

        let urgencyTotal = 0
        let numberOfUrgencyRatings = 0

        reply.numberOfUrgencyRatings = numberOfUrgencyRatings
        reply.urgencyTotal = urgencyTotal

        for (const ideaReplyUrgency of ideaReplyUrgencies) {
            numberOfUrgencyRatings++
            urgencyTotal += ideaReplyUrgency.urgency
        }

        await this.replyDao.save(reply)
    }

    @Api()
    async addReplyType(
        reply: Reply,
        type: 'comment' | 'experience' | 'idea' | 'question'
    ): Promise<void> {
        const replyType: ReplyType = {
            reply,
            repository: reply.repository,
            type
        } as any

        await this.replyTypeDao.save(replyType)
        reply.replyTypes.push(replyType as any)
    }

}