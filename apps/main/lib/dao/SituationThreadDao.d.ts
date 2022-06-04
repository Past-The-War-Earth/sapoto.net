import { SituationThread } from "../ddl/SituationThread";
import { BaseSituationThreadDao } from "../generated/generated";
export declare class SituationThreadDao extends BaseSituationThreadDao {
    add(situationThread: SituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: string): Promise<SituationThread[]>;
    findWithDetailsById(situationThreadId: string): Promise<SituationThread>;
}
//# sourceMappingURL=SituationThreadDao.d.ts.map