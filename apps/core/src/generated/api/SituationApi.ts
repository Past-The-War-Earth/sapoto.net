import {
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	between,
	exists,
	isInteger,
} from '@airbridge/validate';
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
import {
	NEW_RECORD_FIELDS,
} from '@airport/tarmaq-query';
import {
	SituationDvo,
} from '../../dvo/SituationDvo';
import {
	SituationRatingDvo,
} from '../../dvo/SituationRatingDvo';
import {
	RequestManager,
} from '@airport/web-tower';
import {
	Api,
} from '@airport/air-traffic-control';
import {
	ApiProxy,
} from '@airport/airgate';
import {
	application,
} from '../../to_be_generated/app-declaration';



// An API stub for other Applications and UIs to use
// @Injected() is implied but not specified to avoid @airport/direction-indicator
// dependency in UI API stub (eventually, once it's @airport/autopilot is cleaned
// up)
// @Injected()
export class SituationApi extends ApiProxy<SituationApi> {

    constructor() {
        super(application, [])
    }
        
            
    async  findById(
        situation: Situation | string
    ): Promise<Situation> {
        return await this.proxy.findById(situation)
    }

    async  save(
        situation: Situation
    ): Promise<void> {
        await this.proxy.save(situation)
    }

    async  rateSituation(
        situation: Situation,
        situationRating: SituationRating
    ): Promise<SituationRating> {
        return await this.proxy.rateSituation(
            situation,
            situationRating
        )
    }

    async  getNewSituation(): Promise<Situation> {
        return await this.proxy.getNewSituation()
    }

}
