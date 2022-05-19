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
        topic: ITopic
    ): Promise<ISituationThread[]>

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

}
