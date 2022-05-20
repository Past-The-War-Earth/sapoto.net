import { RepositoryEntityId } from "@airport/air-traffic-control"
import { IOC } from "@airport/direction-indicator"
import { ITopic } from "@sapoto/core"
import {
    ISituationThread
} from "../../generated/interfaces"
import { SITUATION_THREAD_API } from "../tokens"

export interface ISituationThreadApi {

    addSituationThread(
        situationThread: ISituationThread
    ): Promise<void>

    findWithListingDetailsForATopic(
        topicId: RepositoryEntityId
    ): Promise<ISituationThread[]>

    findById(
        situationThreadId: ISituationThread
    ): Promise<ISituationThread>

}

export class SituationThreadApiClient
    implements ISituationThreadApi {

    async addSituationThread(
        situationThread: ISituationThread
    ): Promise<void> {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API)
        await situationThreadApi.addSituationThread(situationThread)
    }

    async findWithListingDetailsForATopic(
        topic: ITopic
    ): Promise<ISituationThread[]> {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API)

        return await situationThreadApi.findWithListingDetailsForATopic(
            topic)
    }

    async findById(
        situationThreadId: ISituationThread
    ): Promise<ISituationThread> {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API)

        return await situationThreadApi.findById(situationThreadId)
    }

}
