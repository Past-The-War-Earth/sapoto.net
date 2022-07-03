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
    async findById(
        situation: Situation | string
    ): Promise<Situation> {
        return await this.situationDao.findByUuId(situation)
    }

    @Api()
    async save(
        situation: Situation
    ): Promise<void> {
        const situationRating = await this.doRateSituation(
            situation,
            situation.userRating,
            false
        )
        await this.situationDao.save(situation)
        await this.situationRatingDao.save(situationRating)
    }

    @Api()
    async rateSituation(
        situation: Situation,
        situationRating: SituationRating,
    ): Promise<SituationRating> {
        return await this.doRateSituation(
            situation,
            situationRating,
            false
        )
    }

    private async doRateSituation(
        situation: Situation,
        situationRating: SituationRating,
        isNewSituation: boolean
    ): Promise<SituationRating> {
        if (situationRating.importanceRating < 1) {
            throw new Error(`Invalid Importance Rating`);
        } else if (situationRating.importanceRating > 5) {
            throw new Error(`Invalid Importance Rating`);
        }
        if (situationRating.urgencyRating < 1) {
            throw new Error(`Invalid Urgency Rating`);
        } else if (situationRating.urgencyRating > 5) {
            throw new Error(`Invalid Urgency Rating`);
        }
        situationRating.importanceRating = Math.floor(situationRating.importanceRating) as 1 | 2 | 3 | 4 | 5
        situationRating.urgencyRating = Math.floor(situationRating.urgencyRating) as 1 | 2 | 3 | 4 | 5

        let foundSituation: Situation
        let foundSituationRating: SituationRating
        if (isNewSituation) {
            foundSituation = situation
        } else {
            foundSituation = await this.situationDao.findByUuId(situation, true)
            if (!foundSituation) {
                throw new Error(`Situation ${situation.uuId} does not exist`);
            }
            situationRating = await this.situationRatingDao
                .findForSituationAndUser(situation, this.requestManager.getUser())
        }
        let importanceDelta: ITotalDelta = {
            totalDelta: situationRating.importanceRating,
            numberDelta: 1
        }
        let urgencyDelta: ITotalDelta = {
            totalDelta: situationRating.urgencyRating,
            numberDelta: 1
        }
        if (foundSituationRating) {
            importanceDelta.totalDelta = situationRating.importanceRating
                - situationRating.importanceRating
            importanceDelta.numberDelta = 0
            urgencyDelta.totalDelta = situationRating.urgencyRating
                - situationRating.urgencyRating
            urgencyDelta.numberDelta = 0
            foundSituationRating.importanceRating = situationRating.importanceRating
            foundSituationRating.urgencyRating = situationRating.urgencyRating
        } else {
            situationRating.repository = situation.repository,
                situationRating.situation = situation
            situationRating.actor = this.requestManager.getActor()
        }

        if (isNewSituation) {
            situation.importanceTotal = situationRating.importanceRating
            situation.numberOfImportanceRatings = 1
            situation.urgencyTotal = situationRating.urgencyRating
            situation.numberOfUrgencyRatings = 1
        } else {
            await this.situationDao.updateShareTotal(situation,
                importanceDelta, urgencyDelta)
            await this.situationRatingDao.save(situationRating)
        }

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
