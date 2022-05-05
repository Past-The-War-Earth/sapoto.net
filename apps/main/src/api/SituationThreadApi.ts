import { Api } from "@airport/check-in";
import { transactional } from "@airport/tower";
import { container, DI } from "@airport/direction-indicator";
import { SITUATION_API } from "@sapoto/core/lib/app";
import { IIdeaSituation, IDEA_SITUATION_API } from '@votecube/votecube/lib/app'
import {
    SITUATION_THREAD_API,
} from "../tokens";
import {
    REPLY_DAO,
    REPLY_RATING_DAO,
    REPLY_TYPE_DAO,
    SITUATION_THREAD_DAO
} from "../server-tokens";
import {
    IReply,
    IReplyRating,
    IReplyType,
    ISituationThread
} from "../generated/generated";
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

export class SituationThreadApi implements ISituationThreadApi {

    @Api()
    async addSituationThread(
        situationThread: ISituationThread
    ): Promise<void> {
        // start transactional
        const [situationApi, situationThreadDao] = await container(this).get(
            SITUATION_API, SITUATION_THREAD_DAO)

        await situationApi.save(situationThread.situation)
        await situationThreadDao.add(situationThread)
    }

    @Api()
    async addReply(
        reply: IReply
    ): Promise<void> {
        const replyDao = await container(this).get(REPLY_DAO)
        await replyDao.save(reply)
    }

    @Api()
    async addIdea(
        reply: IReply,
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        const ideaSituationApi = await container(this).get(IDEA_SITUATION_API)
        transactional(async () => {
            ideaSituationApi.add(ideaSituation)
            await this.addReply(reply)
        })
    }

    @Api()
    async rateReply(
        replyRating: IReplyRating
    ): Promise<void> {
        const replyRatingDao = await container(this).get(REPLY_RATING_DAO)
        replyRatingDao.save(replyRating)
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

        const replyTypeDao = await container(this).get(REPLY_TYPE_DAO)
        await replyTypeDao.save(replyType)
        reply.replyTypes.push(replyType as any)
    }

}
DI.set(SITUATION_THREAD_API, SituationThreadApi)
