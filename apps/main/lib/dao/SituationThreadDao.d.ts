import { SituationThread } from "../ddl/SituationThread";
import { BaseSituationThreadDao } from "../generated/generated";
export declare class SituationThreadDao extends BaseSituationThreadDao {
    add(situationThread: SituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicUuId: string): Promise<SituationThread[]>;
    findWithDetailsById(situationThreadId: string): Promise<SituationThread>;
    updateReplyTypeTotals(numberOfIdeasDelta: number, numberOfExperiencesDelta: number, numberOfQuestionsDelta: number, situationThread: SituationThread): Promise<void>;
    updateReplyTotal(numberOfRepliesDelta: number, situationThread: SituationThread): Promise<void>;
}
//# sourceMappingURL=SituationThreadDao.d.ts.map