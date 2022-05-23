import { NEW_RECORD_FIELDS } from '@airport/air-traffic-control'
import { Api } from "@airport/check-in";
import {
    Inject,
    Injected
} from "@airport/direction-indicator";
import { User } from "@airport/travel-document-checkpoint";
import { SituationDao } from "../dao/SituationDao";
import { SituationRatingDao } from "../dao/SituationRatingDao";
import { Situation } from "../ddl/Situation";
import { SituationRating } from '../ddl/SituationRating';

@Injected()
export class SituationApi {

    @Inject()
    situationDao: SituationDao

    @Inject()
    situationRatingDao: SituationRatingDao

    @Api()
    async save(
        situation: Situation
    ): Promise<void> {
        await this.situationDao.save(situation)
    }

    @Api()
    async rateSituation(
        situation: Situation,
        importanceRating: 1 | 2 | 3 | 4 | 5,
        urgencyRating: 1 | 2 | 3 | 4 | 5,
        user: User
    ): Promise<SituationRating> {
        let situationRating = await this.situationRatingDao
            .findForSituationAndUser(situation, user)

        if (!situationRating) {
            situationRating = {
                ...NEW_RECORD_FIELDS,
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
    async getNewSituation(): Promise<Situation> {
        return {
            ...NEW_RECORD_FIELDS,
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
