import { Reply } from "../ddl/Reply";
import { BaseReplyDao } from "../generated/generated";
export declare class ReplyDao extends BaseReplyDao {
    findForSituationThread(situationThreadUuId: string): Promise<Reply[]>;
}
//# sourceMappingURL=ReplyDao.d.ts.map