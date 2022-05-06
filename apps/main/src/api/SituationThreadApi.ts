import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { IIdeaSituation } from '@votecube/votecube'
import {
    IReply,
    IReplyRating,
    IReplyType,
    ISituationThread
} from "../generated/generated";
import { ISituationDao } from "@sapoto/core/lib/dao/SituationDao";
import { IReplyTypeDao } from "../dao/ReplyTypeDao";
import { IReplyRatingDao } from "../dao/ReplyRatingDao";
import { IReplyDao } from "../dao/ReplyDao";
import { ISituationThreadDao } from "../dao/SituationThreadDao";
import { IIdeaSituationApi } from "@votecube/votecube/lib/app";

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

@Injected()
export class SituationThreadApi implements ISituationThreadApi {

    @Inject()
    ideaSituationApi: IIdeaSituationApi

    @Inject()
    replyDao: IReplyDao

    @Inject()
    replyRatingDao: IReplyRatingDao

    @Inject()
    replyTypeDao: IReplyTypeDao

    @Inject()
    situationApi: ISituationDao

    @Inject()
    situationThreadDao: ISituationThreadDao

    @Api()
    async addSituationThread(
        situationThread: ISituationThread
    ): Promise<void> {

        await this.situationApi.save(situationThread.situation)
        await this.situationThreadDao.add(situationThread)
    }

    @Api()
    async addReply(
        reply: IReply
    ): Promise<void> {
        await this.replyDao.save(reply)
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
