import { AirRequest } from "@airport/arrivals-n-departures"
import { Api } from "@airport/check-in"
import { Inject, Injected } from "@airport/direction-indicator"
import { SituationIdeaApi } from "@votecube/votecube"
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

        await this.replyRatingDao.save(replyRating)

        const reply = await this.replyDao.findByUuId(replyRating.reply.uuId)
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
        if (ideaReplyUrgency.urgency < 1) {
            ideaReplyUrgency.urgency = 1
        } else if (ideaReplyUrgency.urgency > 5) {
            ideaReplyUrgency.urgency = 5
        }
        ideaReplyUrgency.urgency = Math.floor(ideaReplyUrgency.urgency) as 1 | 2 | 3 | 4 | 5

        const ideaReplyUrgencies = await this.ideaReplyUrgencyDao
            .findAllForReply(ideaReplyUrgency.reply.uuId)

        let urgencyTotal = 0
        let numberOfUrgencyRatings = 0

        for (const existingIdeaReplyUrgency of ideaReplyUrgencies) {
            if (existingIdeaReplyUrgency.actor.user.uuId === ideaReplyUrgency.actor.user.uuId) {
                existingIdeaReplyUrgency.urgency = ideaReplyUrgency.urgency
                ideaReplyUrgency = existingIdeaReplyUrgency
            }
            numberOfUrgencyRatings++
            urgencyTotal += existingIdeaReplyUrgency.urgency
        }
        await this.replyRatingDao.save(ideaReplyUrgency)

        const reply: Reply = await this.replyDao.findByUuId(ideaReplyUrgency.reply.uuId)
        reply.numberOfUrgencyRatings = numberOfUrgencyRatings
        reply.urgencyTotal = urgencyTotal

        await this.replyDao.save(reply)
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