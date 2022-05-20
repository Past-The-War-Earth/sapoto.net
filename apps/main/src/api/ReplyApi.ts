import { RepositoryEntityId } from "@airport/air-traffic-control"
import { Api } from "@airport/check-in"
import { Inject, Injected } from "@airport/direction-indicator"
import { ISituation } from "@sapoto/core"
import { IIdeaSituation, IIdeaSituationApi } from "@votecube/votecube"
import { IReplyDao } from "../dao/ReplyDao"
import { IReplyRatingDao } from "../dao/ReplyRatingDao"
import { IReplyTypeDao } from "../dao/ReplyTypeDao"
import { IReply } from "../generated/reply"
import { IReplyRating } from "../generated/replyrating"
import { IReplyType } from "../generated/replytype"

export interface IReplyApi {

    addReply(
        reply: IReply
    ): Promise<void>

    getRepliesForSituation(
        situationId: RepositoryEntityId
    ): Promise<IReply[]>

    addIdea(
        reply: IReply,
        ideaSituation: IIdeaSituation
    ): Promise<void>

    rateReply(
        replyRating: IReplyRating
    ): Promise<void>

    addReplyType(
        reply: IReply,
        type: 'comment' | 'experience' | 'idea' | 'question'
    ): Promise<void>

}

@Injected()
export class ReplyApi
    implements IReplyApi {

    @Inject()
    ideaSituationApi: IIdeaSituationApi

    @Inject()
    replyDao: IReplyDao

    @Inject()
    replyRatingDao: IReplyRatingDao

    @Inject()
    replyTypeDao: IReplyTypeDao


    @Api()
    async addReply(
        reply: IReply
    ): Promise<void> {
        await this.replyDao.save(reply)
    }

    @Api()
    async getRepliesForSituation(
        situationId: RepositoryEntityId
    ): Promise<IReply[]> {
        return await this.replyDao.findForSituation(situationId)
    }

    @Api()
    async addIdea(
        reply: IReply,
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        await this.ideaSituationApi.add(ideaSituation)
        await this.addReply(reply)
    }

    @Api()
    async rateReply(
        replyRating: IReplyRating
    ): Promise<void> {
        this.replyRatingDao.save(replyRating)
    }

    @Api()
    async addReplyType(
        reply: IReply,
        type: 'comment' | 'experience' | 'idea' | 'question'
    ): Promise<void> {
        const replyType: IReplyType = {
            reply,
            repository: reply.repository,
            type
        } as any

        await this.replyTypeDao.save(replyType)
        reply.replyTypes.push(replyType as any)
    }

}