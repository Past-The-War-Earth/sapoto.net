import { ITopic } from "@sapoto/core";
import { BaseSituationThreadDao, IBaseSituationThreadDao, ISituationThread } from "../generated/generated";
export interface ISituationThreadDao extends IBaseSituationThreadDao {
    add(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topic: ITopic): Promise<ISituationThread[]>;
}
export declare class SituationThreadDao extends BaseSituationThreadDao implements ISituationThreadDao {
    add(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topic: ITopic): Promise<ISituationThread[]>;
}
//# sourceMappingURL=SituationThreadDao.d.ts.map