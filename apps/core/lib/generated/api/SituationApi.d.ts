import { Situation } from '../../ddl/Situation';
import { SituationRating } from '../../ddl/SituationRating';
export declare class SituationApi {
    constructor();
    situationApi: SituationApi;
    findById(situation: Situation | string): Promise<Situation>;
    save(situation: Situation): Promise<void>;
    rateSituation(situation: Situation, situationRating: SituationRating): Promise<SituationRating>;
    getNewSituation(): Promise<Situation>;
}
//# sourceMappingURL=SituationApi.d.ts.map