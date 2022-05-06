import { Injected } from "@airport/direction-indicator";
import { BaseReplyTypeDao, IBaseReplyTypeDao } from "../generated/generated";

export interface IReplyTypeDao
    extends IBaseReplyTypeDao {

}

@Injected()
export class ReplyTypeDao
    extends BaseReplyTypeDao
    implements IReplyTypeDao {

}
