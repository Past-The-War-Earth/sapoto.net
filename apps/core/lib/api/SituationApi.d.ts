import { RequestManager } from "@airport/arrivals-n-departures";
import { SituationDao } from "../dao/SituationDao";
import { SituationRatingDao } from "../dao/SituationRatingDao";
import { Situation } from "../ddl/Situation";
import { SituationRating } from '../ddl/SituationRating';
import { SituationDvo } from "../dvo/SituationDvo";
import { SituationRatingDvo } from "../dvo/SituationRatingDvo";
export declare class SituationApi {
    requestManager: RequestManager;
    situationDao: SituationDao;
    situationDvo: SituationDvo;
    situationRatingDao: SituationRatingDao;
    situationRatingDvo: SituationRatingDvo;
    findById(situation: Situation | string): Promise<Situation>;
    save(situation: Situation): Promise<void>;
    rateSituation(situation: Situation, situationRating: SituationRating): Promise<SituationRating>;
    private doRateSituation;
    getNewSituation(): Promise<Situation>;
}
//# sourceMappingURL=SituationApi.d.ts.map