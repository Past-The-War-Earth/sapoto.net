import { Api } from "@airport/check-in"
import { Inject, Injected } from "@airport/direction-indicator"
import { IIdeaSituation, IdeaSituationApi } from "@votecube/votecube"
import { ReplyDao } from "../dao/ReplyDao"
import { ReplyRatingDao } from "../dao/ReplyRatingDao"
import { ReplyTypeDao } from "../dao/ReplyTypeDao"
import { Reply } from "../ddl/Reply"
import { ReplyRating } from "../ddl/ReplyRating"
import { ReplyType } from "../ddl/ReplyType"

@Injected()
export class ReplyApi {

    @Inject()
    ideaSituationApi: IdeaSituationApi

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
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        await this.ideaSituationApi.add(ideaSituation)
        await this.addReply(reply)
    }

    @Api()
    async rateReply(
        replyRating: ReplyRating
    ): Promise<void> {
        this.replyRatingDao.save(replyRating)
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