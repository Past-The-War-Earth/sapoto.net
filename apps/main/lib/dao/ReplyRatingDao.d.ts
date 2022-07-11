import { UserAccount } from "@airport/travel-document-checkpoint";
import { Reply } from "../ddl/Reply";
import { ReplyRating } from "../ddl/ReplyRating";
import { SituationThread } from "../ddl/SituationThread";
import { BaseReplyRatingDao } from "../generated/baseDaos";
export declare class ReplyRatingDao extends BaseReplyRatingDao {
    findForReplyAndUser(reply: Reply, user: UserAccount): Promise<ReplyRating>;
    findAllForSituationThreadAndUser(situationThread: SituationThread, user: UserAccount): Promise<ReplyRating[]>;
}
//# sourceMappingURL=ReplyRatingDao.d.ts.map