import { User } from "@airport/travel-document-checkpoint";
import { Reply } from "../ddl/Reply";
import { ReplyRating } from "../ddl/ReplyRating";
import { BaseReplyRatingDao } from "../generated/baseDaos";
export declare class ReplyRatingDao extends BaseReplyRatingDao {
    findForReplyAndUser(reply: Reply | string, user: User | string): Promise<ReplyRating>;
    findAllForSituationThreadAndUser(situationThreadId: string, userId: string): Promise<ReplyRating[]>;
}
//# sourceMappingURL=ReplyRatingDao.d.ts.map