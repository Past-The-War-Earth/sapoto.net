import { between, exists, isInteger, or } from "@airbridge/validate";
import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { SituationApi, Topic } from "@sapoto/core";
import { SituationThreadDao } from "../dao/SituationThreadDao";
import { SituationThread } from "../ddl/SituationThread";
import { SituationThreadDvo } from "../dvo/SituationThreadDvo";

@Injected()
export class SituationThreadApi {

    @Inject()
    situationApi: SituationApi

    @Inject()
    situationThreadDao: SituationThreadDao

    @Inject()
    situationThreadDvo: SituationThreadDvo

    @Api()
    async addSituationThread(
        situationThread: SituationThread
    ): Promise<void> {
        this.situationThreadDvo.validate(situationThread, {
            // TODO: move Age Suitability validation to AIRport
            ageSuitability: isInteger(between(0, 25)),
            situation: or(
                exists(),
                // TODO: tie in situtation validation here
                // { topic: exists() }
            )
        })

        const situation = situationThread.situation

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
