import { IInterAppAPIClient } from "@airport/ground-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { IReply, IReplyRating, ISituationThread } from "../../generated/interfaces";
import { IIdeaSituation } from "@votecube/votecube";
import { SITUATION_THREAD_API } from "../common-tokens";
import { ITopic } from "@sapoto/core";

export interface ISituationThreadApi {

    addSituationThread(
        situationThread: ISituationThread
    ): Promise<void>

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

    findWithListingDetailsForATopic(
        topic: ITopic
    ): Promise<ISituationThread[]>

}


@Injected()
export class SituationThreadApi {

    @Inject()
    interAppApiClient: IInterAppAPIClient

    async addSituationThread(
        situationThread: ISituationThread
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_THREAD_API, 'addSituationThread', [situationThread])
    }

    async addReply(
        reply: IReply
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_THREAD_API, 'addReply', [reply])
    }

    async addIdea(
        reply: IReply,
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_THREAD_API, 'addIdea', [reply, ideaSituation])
    }

    async rateReply(
        replyRating: IReplyRating
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_THREAD_API, 'rateReply', [replyRating])
    }

    async addReplyType(
        reply: IReply,
        type: 'comment' | 'experience' | 'idea' | 'question'
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_THREAD_API, 'addReplyType', [reply, type])
    }

    async findWithListingDetailsForATopic(
        topic: ITopic
    ): Promise<ISituationThread[]> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_THREAD_API, 'findWithListingDetailsForATopic', [topic])
    }

}