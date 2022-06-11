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
        replyRating: ReplyRating,
        replyUuId: string,
        situationThreadUuId: string
    ): Promise<void> {
        const reply: Reply = await this.replyDao.findByUuId(replyUuId)
        if (reply.uuId !== replyRating.reply.uuId) {
            throw new Error(`replyRating doesn't match replyUuId`)
        }

        const replyRatings = await this.replyRatingDao.findAllForSituationThread(situationThreadUuId)
        if (replyRatings.length) {
            if (reply.uuId !== replyRatings[0].reply.uuId) {
                throw new Error(`replyRating doesn't match situationThreadUuid`)
            }
        }

        await this.replyRatingDao.save(replyRating)

        let numberOfDownRatings = 0
        let numberOfUpRatings = 0

        for (const replyRating of replyRatings) {
            if (replyRating.rating < 0) {
                numberOfDownRatings++
            } else if (replyRating.rating > 0) {
                numberOfUpRatings++
            }
        }

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
        ideaReplyUrgency: IdeaReplyUrgency,
        replyUuId: string,
        situationThreadId: string
    ): Promise<void> {
        const reply: Reply = await this.replyDao.findByUuId(replyUuId)
        if (reply.uuId !== ideaReplyUrgency.reply.uuId) {
            throw new Error(`replyRating doesn't match replyUuId`)
        }

        const ideaReplyUrgencies = await this.ideaReplyUrgencyDao.findAllForSituationThread(situationThreadId)
        if (ideaReplyUrgencies.length) {
            if (reply.uuId !== ideaReplyUrgencies[0].reply.uuId) {
                throw new Error(`ideaReplyUrgency doesn't match situationThreadUuid`)
            }
        }

        await this.replyRatingDao.save(ideaReplyUrgency)

        let urgencyTotal = 0
        let numberOfUrgencyRatings = 0

        for (const ideaReplyUrgency of ideaReplyUrgencies) {
            numberOfUrgencyRatings++
            urgencyTotal += ideaReplyUrgency.urgency
        }

        reply.numberOfUrgencyRatings = numberOfUrgencyRatings
        reply.urgencyTotal = urgencyTotal

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