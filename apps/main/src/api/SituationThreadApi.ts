import { between, exists, isInteger, or } from "@airbridge/validate";
import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { SituationApi, SituationRating, Topic } from "@sapoto/core";
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
        situationThread: SituationThread,
        situationRating: SituationRating
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

        if (!situationRating) {
            throw new Error(`Situation Rating must be provided`)
        }

        if (typeof situationRating.importanceRating !== 'number'
            || situationRating.importanceRating < 1
            || situationRating.importanceRating > 5) {
            throw new Error(`Invalid importance, must be between 1 & 5`);
        }

        if (typeof situationRating.urgencyRating !== 'number'
            || situationRating.urgencyRating < 1
            || situationRating.urgencyRating > 5) {
            throw new Error(`Invalid urgency, must be between 1 & 5`);
        }
        situationRating.importanceRating =
            Math.floor(situationRating.importanceRating) as any
        situationRating.urgencyRating =
            Math.floor(situationRating.urgencyRating) as any

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
