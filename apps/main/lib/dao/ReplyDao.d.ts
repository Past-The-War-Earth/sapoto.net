import { Reply } from "../ddl/Reply";
import { BaseReplyDao } from "../generated/generated";
export declare class ReplyDao extends BaseReplyDao {
    findForSituation(situationId: string): Promise<Reply[]>;
}
//# sourceMappingURL=ReplyDao.d.ts.map