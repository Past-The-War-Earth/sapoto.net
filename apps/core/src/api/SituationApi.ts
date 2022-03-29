import { Api } from "@airport/check-in";
import {
    container,
    DI
} from "@airport/di";
import { IUser } from "@airport/travel-document-checkpoint";
import {
    ISituation,
    ISituationRating
} from "../generated/generated";
import {
    SITUATION_DAO,
    SITUATION_RATING_DAO
} from "../server-tokens";
import { SITUATION_API } from "../tokens";

export class SituationApi implements ISituationApi {

    @Api()
    async save(
        situation: ISituation
    ): Promise<void> {
        const situationDao = await container(this).get(SITUATION_DAO)

        await situationDao.save(situation)
    }

    @Api()
    async rateSituation(
        situation: ISituation,
        importanceRating: 1 | 2 | 3 | 4 | 5,
        urgencyRating: 1 | 2 | 3 | 4 | 5,
        user: IUser
    ): Promise<ISituationRating> {
        const situationRatingDao = await container(this).get(SITUATION_RATING_DAO)

        let situationRating = await situationRatingDao
            .findForSituationAndUser(situation, user)

        if (!situationRating) {
            situationRating = {
                actorRecordId: null,
                actor: null,
                importanceRating,
                repository: situation.repository,
                situation,
                urgencyRating
            }
        } else {
            situationRating.importanceRating = importanceRating
            situationRating.urgencyRating = urgencyRating
        }


        await situationRatingDao.save(situationRating)

        return situationRating
    }

}
DI.set(SITUATION_API, SituationApi)
