import { ReplyRating } from "../ddl/ReplyRating";
import { BaseReplyRatingDao } from "../generated/baseDaos";
export declare class ReplyRatingDao extends BaseReplyRatingDao {
    findAllForUserAndSituationThread(userId: string, situationThreadUuId: string): Promise<ReplyRating[]>;
    findAllForSituationThread(situationThreadUuId: string): Promise<ReplyRating[]>;
}
//# sourceMappingURL=ReplyRatingDao.d.ts.map