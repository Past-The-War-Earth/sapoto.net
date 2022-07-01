import { RequestManager } from "@airport/arrivals-n-departures";
import { SituationDao } from "../dao/SituationDao";
import { SituationRatingDao } from "../dao/SituationRatingDao";
import { Situation } from "../ddl/Situation";
import { SituationRating } from '../ddl/SituationRating';
export declare class SituationApi {
    requestManager: RequestManager;
    situationDao: SituationDao;
    situationRatingDao: SituationRatingDao;
    save(situation: Situation): Promise<void>;
    rateSituation(situation: Situation, importanceRating: 1 | 2 | 3 | 4 | 5, urgencyRating: 1 | 2 | 3 | 4 | 5): Promise<SituationRating>;
    getNewSituation(): Promise<Situation>;
}
//# sourceMappingURL=SituationApi.d.ts.map