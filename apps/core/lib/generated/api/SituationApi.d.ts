import { User } from '@airport/travel-document-checkpoint';
import { Situation } from '../../ddl/Situation';
import { SituationRating } from '../../ddl/SituationRating';
export declare class SituationApi {
    constructor();
    situationApi: SituationApi;
    save(situation: Situation): Promise<void>;
    rateSituation(situation: Situation, importanceRating: 1 | 2 | 3 | 4 | 5, urgencyRating: 1 | 2 | 3 | 4 | 5, user: User): Promise<SituationRating>;
    getNewSituation(): Promise<Situation>;
}
//# sourceMappingURL=SituationApi.d.ts.map