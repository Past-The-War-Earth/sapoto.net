import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { IIdeaSituation } from '@votecube/votecube'
import {
    IReply,
    IReplyRating,
    IReplyType,
    ISituationThread
} from "../generated/generated";
import { SituationApi } from "@sapoto/core";
import { IReplyTypeDao } from "../dao/ReplyTypeDao";
import { IReplyRatingDao } from "../dao/ReplyRatingDao";
import { IReplyDao } from "../dao/ReplyDao";
import { ISituationThreadDao } from "../dao/SituationThreadDao";
import { IIdeaSituationApi } from "@votecube/votecube";

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
    situationApi: SituationApi

    @Inject()
    situationThreadDao: ISituationThreadDao

    @Api()
    async addSituationThread(
        situationThread: ISituationThread
    ): Promise<void> {
        const situation = await this.situationApi.getNewSituation();
        const situationIn = situationThread.situation

        if (situationIn.ageSuitability < 0 || situationIn.ageSuitability > 25) {
            throw new Error(`Invalid importance, must be between 0 & 25`);
        }

        let eMatrix = situationIn.eisenhowerMatrix
        if (eMatrix.user.importance < 1 || eMatrix.user.importance > 5) {
            throw new Error(`Invalid importance, must be between 1 & 5`);
        }
        if (eMatrix.user.urgency < 1 || eMatrix.user.urgency > 5) {
            throw new Error(`Invalid urgency, must be between 1 & 5`);
        }

        situation.ageSuitability = situationIn.ageSuitability
        situation.eisenhowerMatrix.importance = eMatrix.user.importance
        situation.eisenhowerMatrix.urgency = eMatrix.user.urgency
        situation.text = situationIn.text

        situationThread.situation = situation
        situationThread.replies = []

        await this.situationApi.save(situation)
        situationThread.repository = situation.repository
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
