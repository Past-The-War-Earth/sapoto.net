import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { SituationApi, Topic } from "@sapoto/core";
import { SituationThreadDao } from "../dao/SituationThreadDao";
import { SituationThread } from "../ddl/SituationThread";

@Injected()
export class SituationThreadApi {

    @Inject()
    situationApi: SituationApi

    @Inject()
    situationThreadDao: SituationThreadDao

    @Api()
    async addSituationThread(
        situationThread: SituationThread
    ): Promise<void> {
        const situation = situationThread.situation

        // TODO: move Age Suitability validation to AIRport
        if (situation.ageSuitability < 0 || situation.ageSuitability > 25) {
            throw new Error(`Invalid Age Suitability, must be between 0 & 25`);
        }

        let eMatrix = situation.eisenhowerMatrix
        if (eMatrix.user.importance < 1 || eMatrix.user.importance > 5) {
            throw new Error(`Invalid importance, must be between 1 & 5`);
        }
        if (eMatrix.user.urgency < 1 || eMatrix.user.urgency > 5) {
            throw new Error(`Invalid urgency, must be between 1 & 5`);
        }
        eMatrix.user.importance = Math.floor(eMatrix.user.importance)
        eMatrix.user.urgency = Math.floor(eMatrix.user.urgency)

        const topic = situation.topic

        if (!topic || !topic.id) {
            throw new Error(`No topic provided - missing topic or an id`);
        }

        await this.situationApi.save(situation)
        situationThread.repository = situation.repository
        situationThread.replies = []

        await this.situationThreadDao.add(situationThread)
    }

    @Api()
    async findWithListingDetailsForATopic(
        topicId: string | Topic
    ): Promise<SituationThread[]> {
        return await this.situationThreadDao.findWithListingDetailsForATopic(topicId)
    }

    @Api()
    async findById(
        situationThreadId: string | SituationThread
    ): Promise<SituationThread> {
        return await this.situationThreadDao
            .findWithSituation(situationThreadId)
    }

}
