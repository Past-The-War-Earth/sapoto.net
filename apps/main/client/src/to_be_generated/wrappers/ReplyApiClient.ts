import { IOC } from "@airport/direction-indicator"
import { REPLY_API } from "../tokens"
import { IIdeaSituation } from "@votecube/votecube"
import { IReply, IReplyRating } from "../../generated/interfaces"
import { ISituation } from "@sapoto/core"

export interface IReplyApi {

    addReply(
        reply: IReply
    ): Promise<void>

    getRepliesForSituationThread(
        situationThreadId: string
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

export class ReplyApi
    implements IReplyApi {

    async addReply(
        reply: IReply
    ): Promise<void> {
        const replyApi = await IOC.get(REPLY_API)
        await replyApi.addReply(reply)
    }

    async getRepliesForSituationThread(
        situationThreadId: string
    ): Promise<IReply[]> {
        const replyApi = await IOC.get(REPLY_API)
        return await replyApi.getRepliesForSituationThread(situationThreadId)
    }

    async addIdea(
        reply: IReply,
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        const replyApi = await IOC.get(REPLY_API)
        await replyApi.addIdea(reply, ideaSituation)
    }

    async rateReply(
        replyRating: IReplyRating
    ): Promise<void> {
        const replyApi = await IOC.get(REPLY_API)
        await replyApi.rateReply(replyRating)
    }

    async addReplyType(
        reply: IReply,
        type: 'comment' | 'experience' | 'idea' | 'question'
    ): Promise<void> {
        const replyApi = await IOC.get(REPLY_API)
        await replyApi.addReplyType(reply, type)
    }

}