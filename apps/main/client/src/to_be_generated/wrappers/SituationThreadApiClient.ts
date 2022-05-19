import { IOC } from "@airport/direction-indicator"
import {
    ISituationThread
} from "../../generated/interfaces"
import { SITUATION_THREAD_API } from "../tokens"

export interface ISituationThreadApi {

    addSituationThread(
        situationThread: ISituationThread
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

}
