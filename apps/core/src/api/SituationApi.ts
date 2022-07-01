import { NEW_RECORD_FIELDS } from '@airport/air-traffic-control'
import { Api } from "@airport/check-in";
import {
    Inject,
    Injected
} from "@airport/direction-indicator";
import { RequestManager } from "@airport/arrivals-n-departures";
import { SituationDao } from "../dao/SituationDao";
import { SituationRatingDao } from "../dao/SituationRatingDao";
import { Situation } from "../ddl/Situation";
import { SituationRating } from '../ddl/SituationRating';
import { ITotalDelta } from '../ddl/TotalDelta';

@Injected()
export class SituationApi {

    @Inject()
    requestManager: RequestManager

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
        urgencyRating: 1 | 2 | 3 | 4 | 5
    ): Promise<SituationRating> {
        if (importanceRating < 1) {
            throw new Error(`Invalid Importance Rating`);
        } else if (importanceRating > 5) {
            throw new Error(`Invalid Importance Rating`);
        }
        if (urgencyRating < 1) {
            throw new Error(`Invalid Urgency Rating`);
        } else if (urgencyRating > 5) {
            throw new Error(`Invalid Urgency Rating`);
        }
        importanceRating = Math.floor(importanceRating) as 1 | 2 | 3 | 4 | 5
        urgencyRating = Math.floor(urgencyRating) as 1 | 2 | 3 | 4 | 5

        const existingSituation: Situation = await this.situationDao.findByUuId(situation, true)
        if (!existingSituation) {
            throw new Error(`Situation ${situation.uuId} does not exist`);
        }
        let situationRating: SituationRating = await this.situationRatingDao
            .findForSituationAndUser(situation, this.requestManager.getUser())
        let importanceDelta: ITotalDelta = {
            totalDelta: importanceRating,
            numberDelta: 1
        }
        let urgencyDelta: ITotalDelta = {
            totalDelta: urgencyRating,
            numberDelta: 1
        }
        if (situationRating) {
            importanceDelta.totalDelta = importanceRating - situationRating.importanceRating
            importanceDelta.numberDelta = 0
            urgencyDelta.totalDelta = urgencyRating - situationRating.urgencyRating
            urgencyDelta.numberDelta = 0
            situationRating.importanceRating = importanceRating
            situationRating.urgencyRating = urgencyRating
        } else {
            situationRating = {
                importanceRating,
                repository: situation.repository,
                situation,
                urgencyRating,
                actor: this.requestManager.getActor()
            }
        }

        await this.situationDao.updateShareTotal(situation,
            importanceDelta, urgencyDelta)

        await this.situationRatingDao.save(situationRating)

        return situationRating
    }

    @Api()
    async getNewSituation(): Promise<Situation> {
        const situation: Situation = {
            ...NEW_RECORD_FIELDS,
            ageSuitability: 0,
            repository: null,
            text: '',
            topic: null,
            urgencyTotal: 0,
            numberOfUrgencyRatings: 0,
            importanceTotal: 0,
            numberOfImportanceRatings: 0
        }
        const userRating: SituationRating = {
            importanceRating: 3,
            urgencyRating: 3,
            situation
        }
        situation.userRating = userRating
        situation.ratings = [userRating]

        return situation
    }

}
