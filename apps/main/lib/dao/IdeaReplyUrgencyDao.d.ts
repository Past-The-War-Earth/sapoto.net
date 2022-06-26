import { IdeaReplyUrgency } from "../ddl/IdeaReplyUrgency";
import { BaseIdeaReplyUrgencyDao } from "../generated/baseDaos";
export declare class IdeaReplyUrgencyDao extends BaseIdeaReplyUrgencyDao {
    findAllForUserAndSituationThread(userUuId: string, situationThreadUuId: string): Promise<IdeaReplyUrgency[]>;
    findAllForReply(replyUuId: string): Promise<IdeaReplyUrgency[]>;
}
//# sourceMappingURL=IdeaReplyUrgencyDao.d.ts.map