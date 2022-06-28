import { ReplyRating } from "../ddl/ReplyRating";
import { BaseReplyRatingDao } from "../generated/baseDaos";
export declare class ReplyRatingDao extends BaseReplyRatingDao {
    findAllForReply(replyUuId: string): Promise<ReplyRating[]>;
    findAllForSituationThreadAndUser(situationThreadId: string, userId: string): Promise<ReplyRating[]>;
}
//# sourceMappingURL=ReplyRatingDao.d.ts.map