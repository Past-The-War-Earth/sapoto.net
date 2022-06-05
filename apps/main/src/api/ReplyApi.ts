import { Api } from "@airport/check-in"
import { Inject, Injected } from "@airport/direction-indicator"
import { ISituationIdea, SituationIdeaApi } from "@votecube/votecube"
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


    @Api()
    async addReply(
        reply: Reply
    ): Promise<void> {
        await this.replyDao.save(reply)
    }

    @Api()
    async getRepliesForSituationThread(
        situationThreadId: string
    ): Promise<Reply[]> {
        return await this.replyDao.findForSituation(situationThreadId)
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
        replyId: string,
        situationThreadId: string
    ): Promise<void> {
        const reply = await this.replyDao.findById(replyId)
        if(reply.id !== replyRating.reply.id) {
            
        }

        const replyRatings = await this.replyRatingDao.findAllForSituationThread(situationThreadId)

        await this.replyRatingDao.save(replyRating)

        let numberOfDownRatings = 0
        let numberOfUpRatings = 0

        for (const replyRating of replyRatings) {
            if(replyRating.rating < 0) {
                numberOfDownRatings++
            } else if (replyRating.rating > 0) {
                numberOfUpRatings++
            }
        }

        reply.numberOfDownRatings = numberOfDownRatings
        reply.numberOfUpRatings = numberOfUpRatings

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