import { DI } from "@airport/direction-indicator";
import { BaseReplyDao, IBaseReplyDao } from "../generated/generated";
import { REPLY_DAO } from "../server-tokens";

export interface IReplyDao
    extends IBaseReplyDao {

}

export class ReplyDao
    extends BaseReplyDao
    implements IReplyDao {

}
DI.set(REPLY_DAO, ReplyDao)
