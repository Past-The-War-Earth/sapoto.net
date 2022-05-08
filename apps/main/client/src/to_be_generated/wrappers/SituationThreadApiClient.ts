import { IOC } from "@airport/direction-indicator"
import {
    IReply,
    IReplyRating,
    ISituationThread
} from "../../generated/interfaces"
import { IIdeaSituation } from "@votecube/votecube-client"
import { SITUATION_THREAD_API } from "../tokens"

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

}

export class SituationThreadApiClient
    implements ISituationThreadApi {

    async addSituationThread(
        situationThread: ISituationThread
    ): Promise<void> {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API)
        await situationThreadApi.addSituationThread(situationThread)
    }

    async addReply(
        reply: IReply
    ): Promise<void> {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API)
        await situationThreadApi.addReply(reply)
    }

    async addIdea(
        reply: IReply,
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API)
        await situationThreadApi.addIdea(reply, ideaSituation)
    }

    async rateReply(
        replyRating: IReplyRating
    ): Promise<void> {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API)
        await situationThreadApi.rateReply(replyRating)
    }

    async addReplyType(
        reply: IReply,
        type: 'comment' | 'experience' | 'idea' | 'question'
    ): Promise<void> {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API)
        await situationThreadApi.addReplyType(reply, type)
    }

}
