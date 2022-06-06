import { IdeaReplyUrgency } from "../ddl/IdeaReplyUrgency";
import { BaseIdeaReplyUrgencyDao } from "../generated/baseDaos";
export declare class IdeaReplyUrgencyDao extends BaseIdeaReplyUrgencyDao {
    findAllForUserAndSituationThread(userId: string, situationThreadId: string): Promise<IdeaReplyUrgency[]>;
    findAllForSituationThread(situationThreadId: string): Promise<IdeaReplyUrgency[]>;
}
//# sourceMappingURL=IdeaReplyUrgencyDao.d.ts.map