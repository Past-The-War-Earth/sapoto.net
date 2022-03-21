import { DI } from "@airport/di";
import { BaseReplyTypeDao, IBaseReplyTypeDao } from "../generated/generated";
import { REPLY_TYPE_DAO } from "../server";

export interface IReplyTypeDao
    extends IBaseReplyTypeDao {

}

export class ReplyTypeDao
    extends BaseReplyTypeDao
    implements IReplyTypeDao {

}
DI.set(REPLY_TYPE_DAO, ReplyTypeDao)
