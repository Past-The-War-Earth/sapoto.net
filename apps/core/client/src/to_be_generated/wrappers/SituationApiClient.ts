import { IOC } from "@airport/direction-indicator";
import type { IUser } from "@airport/travel-document-checkpoint-client";
import { ISituation } from "../../generated/situation";
import { ISituationRating } from "../../generated/situationrating";
import { SITUATION_API } from "../tokens";

export interface ISituationApi {

    save(
        situation: ISituation
    ): Promise<void>

    rateSituation(
        situation: ISituation,
        importanceRating: 1 | 2 | 3 | 4 | 5,
        urgencyRating: 1 | 2 | 3 | 4 | 5,
        user: IUser
    ): Promise<ISituationRating>

}

export class SituationApiClient
    implements ISituationApi {

    async save(
        situation: ISituation
    ): Promise<void> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi.save(situation)
    }

    async rateSituation(
        situation: ISituation,
        importanceRating: 1 | 2 | 3 | 4 | 5,
        urgencyRating: 1 | 2 | 3 | 4 | 5,
        user: IUser
    ): Promise<ISituationRating> {
        const situationApi = await IOC.get(SITUATION_API)

        return await situationApi.rateSituation(
            situation, importanceRating, urgencyRating, user)
    }

}
