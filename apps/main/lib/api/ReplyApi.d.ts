import { AirRequest, IRequestManager } from "@airport/arrivals-n-departures";
import { SituationIdeaApi } from "@votecube/votecube";
import { ReplyDao } from "../dao/ReplyDao";
import { ReplyRatingDao } from "../dao/ReplyRatingDao";
import { ReplyTypeDao } from "../dao/ReplyTypeDao";
import { Reply } from "../ddl/Reply";
import { ReplyRating } from "../ddl/ReplyRating";
export declare class ReplyApi {
    situationIdeaApi: SituationIdeaApi;
    replyDao: ReplyDao;
    replyRatingDao: ReplyRatingDao;
    replyTypeDao: ReplyTypeDao;
    airRequest: AirRequest;
    requestManager: IRequestManager;
    addReply(reply: Reply): Promise<void>;
    getRepliesForSituationThread(situationThreadUuId: string): Promise<Reply[]>;
    addIdea(reply: Reply): Promise<void>;
    rateReply(replyRating: ReplyRating): Promise<void>;
    updateCounts(situationThreadUuId: string): Promise<void>;
    addReplyType(reply: Reply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApi.d.ts.map