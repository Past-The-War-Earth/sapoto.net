import { DI } from "@airport/direction-indicator";
import { BaseReplyTypeDao } from "../generated/generated";
import { REPLY_TYPE_DAO } from "../server";
export class ReplyTypeDao extends BaseReplyTypeDao {
}
DI.set(REPLY_TYPE_DAO, ReplyTypeDao);
//# sourceMappingURL=ReplyTypeDao.js.map