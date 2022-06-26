import { ReplyType } from "../ddl/ReplyType";
import { BaseReplyTypeDao } from "../generated/generated";
export declare class ReplyTypeDao extends BaseReplyTypeDao {
    getAllForReply(replyUuId: string): Promise<ReplyType[]>;
}
//# sourceMappingURL=ReplyTypeDao.d.ts.map