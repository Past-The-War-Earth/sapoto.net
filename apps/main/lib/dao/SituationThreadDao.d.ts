import { BaseSituationThreadDao, IBaseSituationThreadDao, ISituationThread } from "../generated/generated";
export interface ISituationThreadDao extends IBaseSituationThreadDao {
    add(situationThread: ISituationThread): Promise<void>;
}
export declare class SituationThreadDao extends BaseSituationThreadDao implements ISituationThreadDao {
    add(situationThread: ISituationThread): Promise<void>;
}
//# sourceMappingURL=SituationThreadDao.d.ts.map