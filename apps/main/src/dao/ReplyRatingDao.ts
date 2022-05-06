import { Injected } from "@airport/direction-indicator";
import { BaseReplyRatingDao, IBaseReplyRatingDao } from "../generated/baseDaos";

export interface IReplyRatingDao
    extends IBaseReplyRatingDao {

}

@Injected()
export class ReplyRatingDao
    extends BaseReplyRatingDao
    implements IReplyRatingDao {

}
