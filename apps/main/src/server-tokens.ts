import { ISituationThreadDao } from "./dao/dao";
import { IReplyDao } from "./dao/ReplyDao";
import { IReplyRatingDao } from "./dao/ReplyRatingDao";
import { IReplyTypeDao } from "./dao/ReplyTypeDao";
import { main } from "./tokens";

export const REPLY_DAO = main.token<IReplyDao>('REPLY_DAO')
export const REPLY_RATING_DAO = main.token<IReplyRatingDao>('REPLY_RATING_DAO')
export const REPLY_TYPE_DAO = main.token<IReplyTypeDao>('REPLY_TYPE_DAO')
export const SITUATION_THREAD_DAO = main.token<ISituationThreadDao>('SITUATION_THREAD_DAO')
