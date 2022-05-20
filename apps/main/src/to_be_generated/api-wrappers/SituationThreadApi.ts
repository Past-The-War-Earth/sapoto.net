import { IInterAppAPIClient } from "@airport/ground-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { ISituationThread } from "../../generated/interfaces";
import { SITUATION_THREAD_API } from "../common-tokens";

export interface ISituationThreadApi {

    addSituationThread(
        situationThread: ISituationThread
    ): Promise<void>

    findWithListingDetailsForATopic(
        topicId: string
    ): Promise<ISituationThread[]>

}

@Injected()
export class SituationThreadApi {

    @Inject()
    interAppApiClient: IInterAppAPIClient

    async addSituationThread(
        situationThread: ISituationThread
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_THREAD_API, 'addSituationThread', [situationThread])
    }

    async findWithListingDetailsForATopic(
        topicId: string
    ): Promise<ISituationThread[]> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_THREAD_API, 'findWithListingDetailsForATopic', [topicId])
    }

}
