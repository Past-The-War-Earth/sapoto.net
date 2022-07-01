import {
	SITUATION_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	NEW_RECORD_FIELDS,
} from '@airport/air-traffic-control';
import {
	Api,
} from '@airport/check-in';
import {
	RequestManager,
} from '@airport/arrivals-n-departures';
import {
	SituationDao,
} from '../../dao/SituationDao';
import {
	SituationRatingDao,
} from '../../dao/SituationRatingDao';
import {
	Situation,
} from '../../ddl/Situation';
import {
	SituationRating,
} from '../../ddl/SituationRating';
import {
	ITotalDelta,
} from '../../ddl/TotalDelta';



// An API stub for other Applications and UIs to use
@Injected()
export class SituationApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, SITUATION_API)
    }
        
    @Inject()
    situationApi: SituationApi
            
    async  save(
        situation: Situation
    ): Promise<void> {
        await this.situationApi.save(situation)
    }

    async  rateSituation(
        situation: Situation,
        importanceRating: 1 | 2 | 3 | 4 | 5,
        urgencyRating: 1 | 2 | 3 | 4 | 5
    ): Promise<SituationRating> {
        return await this.situationApi.rateSituation(
            situation,
            importanceRating,
            urgencyRating
        )
    }

    async  getNewSituation(): Promise<Situation> {
        return await this.situationApi.getNewSituation()
    }

}
