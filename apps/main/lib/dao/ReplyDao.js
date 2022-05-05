import { DI } from "@airport/direction-indicator";
import { BaseReplyDao } from "../generated/generated";
import { REPLY_DAO } from "../server-tokens";
export class ReplyDao extends BaseReplyDao {
}
DI.set(REPLY_DAO, ReplyDao);
//# sourceMappingURL=ReplyDao.js.map