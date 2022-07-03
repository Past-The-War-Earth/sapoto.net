import { RequestManager } from "@airport/arrivals-n-departures";
import { SituationDao } from "../dao/SituationDao";
import { SituationRatingDao } from "../dao/SituationRatingDao";
import { Situation } from "../ddl/Situation";
import { SituationRating } from '../ddl/SituationRating';
export declare class SituationApi {
    requestManager: RequestManager;
    situationDao: SituationDao;
    situationRatingDao: SituationRatingDao;
    findById(situation: Situation | string): Promise<Situation>;
    save(situation: Situation): Promise<void>;
    rateSituation(situation: Situation, situationRating: SituationRating): Promise<SituationRating>;
    private doRateSituation;
    getNewSituation(): Promise<Situation>;
}
//# sourceMappingURL=SituationApi.d.ts.map