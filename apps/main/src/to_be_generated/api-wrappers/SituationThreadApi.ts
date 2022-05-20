import { IInterAppAPIClient } from "@airport/ground-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { ISituationThread } from "../../generated/interfaces";
import { SITUATION_THREAD_API } from "../common-tokens";
import { ITopic } from "@sapoto/core";

export interface ISituationThreadApi {

    addSituationThread(
        situationThread: ISituationThread
    ): Promise<void>

    findWithListingDetailsForATopic(
        topic: ITopic
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
        topic: ITopic
    ): Promise<ISituationThread[]> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_THREAD_API, 'findWithListingDetailsForATopic', [topic])
    }

}
