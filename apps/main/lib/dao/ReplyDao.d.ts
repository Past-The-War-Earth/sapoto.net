import { BaseReplyDao, IBaseReplyDao, IReply } from "../generated/generated";
export interface IReplyDao extends IBaseReplyDao {
    findForSituation(situationId: string): Promise<IReply[]>;
}
export declare class ReplyDao extends BaseReplyDao implements IReplyDao {
    findForSituation(situationId: string): Promise<IReply[]>;
}
//# sourceMappingURL=ReplyDao.d.ts.map