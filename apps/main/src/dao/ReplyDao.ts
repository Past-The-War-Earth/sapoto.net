import { Injected } from "@airport/direction-indicator";
import { BaseReplyDao, IBaseReplyDao } from "../generated/generated";

export interface IReplyDao
    extends IBaseReplyDao {

}

@Injected()
export class ReplyDao
    extends BaseReplyDao
    implements IReplyDao {

}
