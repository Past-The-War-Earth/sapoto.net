import { Situation } from "../ddl/situation";
import { ITotalDelta } from "../ddl/TotalDelta";
import { BaseSituationDao } from "../generated/baseDaos";
export declare class SituationDao extends BaseSituationDao {
    updateShareTotal(situation: Situation, importanceDelta: ITotalDelta, urgencyDelta: ITotalDelta): Promise<void>;
}
//# sourceMappingURL=SituationDao.d.ts.map