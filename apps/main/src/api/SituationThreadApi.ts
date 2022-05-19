import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import {
    ISituationThread
} from "../generated/generated";
import { SituationApi } from "@sapoto/core";
import { ISituationThreadDao } from "../dao/SituationThreadDao";

export interface ISituationThreadApi {

    addSituationThread(
        situationThread: ISituationThread
    ): Promise<void>

}

@Injected()
export class SituationThreadApi implements ISituationThreadApi {

    @Inject()
    situationApi: SituationApi

    @Inject()
    situationThreadDao: ISituationThreadDao

    @Api()
    async addSituationThread(
        situationThread: ISituationThread
    ): Promise<void> {
        const situation = situationThread.situation

        if (situation.ageSuitability < 0 || situation.ageSuitability > 25) {
            throw new Error(`Invalid importance, must be between 0 & 25`);
        }

        let eMatrix = situation.eisenhowerMatrix
        if (eMatrix.user.importance < 1 || eMatrix.user.importance > 5) {
            throw new Error(`Invalid importance, must be between 1 & 5`);
        }
        if (eMatrix.user.urgency < 1 || eMatrix.user.urgency > 5) {
            throw new Error(`Invalid urgency, must be between 1 & 5`);
        }

        const topic = situation.topic

        if (!topic || !topic.repository.id || !topic.actor.id
            || !topic.actorRecordId) {
            throw new Error(`No topic provided - missing topic or an id`);
        }

        await this.situationApi.save(situation)
        situationThread.repository = situation.repository
        situationThread.replies = []

        await this.situationThreadDao.add(situationThread)
    }

}
