import { IInterAppAPIClient } from "@airport/ground-control";
import { Inject, Injected } from "@airport/direction-indicator";
import {
    ISituation,
    ISituationRating,
    ITheme,
    ITopic
} from "../../generated/interfaces";
import { IUser } from "@airport/travel-document-checkpoint";
import { SITUATION_API } from "../common-tokens";

@Injected()
export class SituationApi {

    @Inject()
    interAppApiClient: IInterAppAPIClient


    async save(
        situation: ISituation
    ): Promise<void> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_API, 'save', [situation])
    }

    async rateSituation(
        situation: ISituation,
        importanceRating: 1 | 2 | 3 | 4 | 5,
        urgencyRating: 1 | 2 | 3 | 4 | 5,
        user: IUser
    ): Promise<ISituationRating> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_API, 'rateSituation', [situation, importanceRating, urgencyRating, user])
    }

    async findWithListingDetailsForATopic(
        topic: ITopic
    ): Promise<ISituation[]> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_API, 'findWithListingDetailsForATopic', [topic])
    }

    async findWithListingDetailsForATheme(
        theme: ITheme
    ): Promise<ISituation[]> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_API, 'findWithListingDetailsForATheme', [theme])
    }

    async getNewSituation(): Promise<ISituation> {
        return await this.interAppApiClient.invokeApiMethod(
            SITUATION_API, 'getNewSituation', [])
    }

}