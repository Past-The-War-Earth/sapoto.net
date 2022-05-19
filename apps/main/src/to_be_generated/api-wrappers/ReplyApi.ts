import { IInterAppAPIClient } from "@airport/ground-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { IReply, IReplyRating } from "../../generated/interfaces";
import { IIdeaSituation } from "@votecube/votecube";
import { REPLY_API } from "../common-tokens";
import { ISituation } from "@sapoto/core";

export interface IReplyApi {

    getRepliesForSituation(
        situation: ISituation
    ): Promise<IReply[]>

    addReply(
        reply: IReply
    ): Promise<void>

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
    interAppApiClient: IInterAppAPIClient

    async getRepliesForSituation(
        situation: ISituation
    ): Promise<IReply[]> {
        return await this.interAppApiClient.invokeApiMethod(
            REPLY_API, 'getRepliesForSituation', [situation])
    }

    async addReply(
        reply: IReply
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            REPLY_API, 'addReply', [reply])
    }

    async addIdea(
        reply: IReply,
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            REPLY_API, 'addIdea', [reply, ideaSituation])
    }

    async rateReply(
        replyRating: IReplyRating
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            REPLY_API, 'rateReply', [replyRating])
    }

    async addReplyType(
        reply: IReply,
        type: 'comment' | 'experience' | 'idea' | 'question'
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            REPLY_API, 'addReplyType', [reply, type])
    }

}