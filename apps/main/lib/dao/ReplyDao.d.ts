import { ISituation } from "@sapoto/core";
import { BaseReplyDao, IBaseReplyDao, IReply } from "../generated/generated";
export interface IReplyDao extends IBaseReplyDao {
    findForSituation(situation: ISituation): Promise<IReply[]>;
}
export declare class ReplyDao extends BaseReplyDao implements IReplyDao {
    findForSituation(situation: ISituation): Promise<IReply[]>;
}
//# sourceMappingURL=ReplyDao.d.ts.map