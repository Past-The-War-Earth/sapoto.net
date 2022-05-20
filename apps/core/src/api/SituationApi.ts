import { Api } from "@airport/check-in";
import {
    Inject,
    Injected
} from "@airport/direction-indicator";
import { IUser } from "@airport/travel-document-checkpoint";
import {
    ISituation,
    ISituationRating,
} from "../generated/generated";
import { SituationDao } from "../dao/SituationDao";
import { SituationRatingDao } from "../dao/SituationRatingDao";

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

    getNewSituation(): Promise<ISituation>

}

@Injected()
export class SituationApi implements ISituationApi {

    @Inject()
    situationDao: SituationDao

    @Inject()
    situationRatingDao: SituationRatingDao

    @Api()
    async save(
        situation: ISituation
    ): Promise<void> {
        await this.situationDao.save(situation)
    }

    @Api()
    async rateSituation(
        situation: ISituation,
        importanceRating: 1 | 2 | 3 | 4 | 5,
        urgencyRating: 1 | 2 | 3 | 4 | 5,
        user: IUser
    ): Promise<ISituationRating> {
        let situationRating = await this.situationRatingDao
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


        await this.situationRatingDao.save(situationRating)

        return situationRating
    }

    @Api()
    async getNewSituation(): Promise<ISituation> {
        return {
            actor: null,
            actorRecordId: null,
            ageSuitability: 0,
            repository: null,
            eisenhowerMatrix: {
                importance: 0,
                urgency: 0,
                votes: 0,
                user: {
                    importance: 0,
                    urgency: 0
                }
            },
            text: '',
            topic: null
        };
    }

}
