import {
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
	User,
} from '@airport/travel-document-checkpoint';
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


// An API stub for other Applications and UIs to use
@Injected()
export class SituationApi {

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
        urgencyRating: 1 | 2 | 3 | 4 | 5,
        user: User
    ): Promise<SituationRating> {
        return await this.situationApi.rateSituation(
            situation,
            importanceRating,
            urgencyRating,
            user
        )
    }

    async  getNewSituation(): Promise<Situation> {
        return await this.situationApi.getNewSituation()
    }

}
