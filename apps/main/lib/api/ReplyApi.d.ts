import { AirRequest, IRequestManager } from "@airport/arrivals-n-departures";
import { SituationIdeaApi } from "@votecube/votecube";
import { ReplyDao } from "../dao/ReplyDao";
import { ReplyRatingDao } from "../dao/ReplyRatingDao";
import { SituationThreadDao } from "../dao/SituationThreadDao";
import { Reply } from "../ddl/Reply";
import { ReplyRating } from "../ddl/ReplyRating";
export declare class ReplyApi {
    situationIdeaApi: SituationIdeaApi;
    replyDao: ReplyDao;
    replyRatingDao: ReplyRatingDao;
    airRequest: AirRequest;
    requestManager: IRequestManager;
    situationThreadDao: SituationThreadDao;
    addReply(reply: Reply): Promise<void>;
    getRepliesForSituationThread(situationThreadUuId: string): Promise<Reply[]>;
    rateReply(replyRating: ReplyRating): Promise<void>;
    updateCounts(situationThreadUuId: string): Promise<void>;
    setReplyType(reply: Reply, type: 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApi.d.ts.map