import { DI } from "@airport/di";
import { BaseReplyRatingDao, IBaseReplyRatingDao, REPLY_RATING_DAO } from "../server";

export interface IReplyRatingDao
    extends IBaseReplyRatingDao {

}

export class ReplyRatingDao
    extends BaseReplyRatingDao
    implements IReplyRatingDao {

}
DI.set(REPLY_RATING_DAO, ReplyRatingDao)
