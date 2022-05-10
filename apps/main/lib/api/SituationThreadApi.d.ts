import { IIdeaSituation } from '@votecube/votecube';
import { IReply, IReplyRating, ISituationThread } from "../generated/generated";
import { ISituationDao } from "@sapoto/core/lib/dao/SituationDao";
import { IReplyTypeDao } from "../dao/ReplyTypeDao";
import { IReplyRatingDao } from "../dao/ReplyRatingDao";
import { IReplyDao } from "../dao/ReplyDao";
import { ISituationThreadDao } from "../dao/SituationThreadDao";
import { IIdeaSituationApi } from "@votecube/votecube";
export interface ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    addReply(reply: IReply): Promise<void>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
export declare class SituationThreadApi implements ISituationThreadApi {
    ideaSituationApi: IIdeaSituationApi;
    replyDao: IReplyDao;
    replyRatingDao: IReplyRatingDao;
    replyTypeDao: IReplyTypeDao;
    situationApi: ISituationDao;
    situationThreadDao: ISituationThreadDao;
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    addReply(reply: IReply): Promise<void>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map