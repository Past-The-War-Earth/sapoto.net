import { AirRequest } from "@airport/arrivals-n-departures";
import { ISituationIdea, SituationIdeaApi } from "@votecube/votecube";
import { IdeaReplyUrgencyDao } from "../dao/IdeaReplyUrgencyDao";
import { ReplyDao } from "../dao/ReplyDao";
import { ReplyRatingDao } from "../dao/ReplyRatingDao";
import { ReplyTypeDao } from "../dao/ReplyTypeDao";
import { IdeaReplyUrgency } from "../ddl/IdeaReplyUrgency";
import { Reply } from "../ddl/Reply";
import { ReplyRating } from "../ddl/ReplyRating";
export declare class ReplyApi {
    situationIdeaApi: SituationIdeaApi;
    replyDao: ReplyDao;
    replyRatingDao: ReplyRatingDao;
    ideaReplyUrgencyDao: IdeaReplyUrgencyDao;
    replyTypeDao: ReplyTypeDao;
    airRequest: AirRequest;
    addReply(reply: Reply): Promise<void>;
    getRepliesForSituationThread(situationThreadUuId: string): Promise<Reply[]>;
    addIdea(reply: Reply, situationIdea: ISituationIdea): Promise<void>;
    rateReply(replyRating: ReplyRating): Promise<void>;
    updateCounts(situationThreadUuId: string): Promise<void>;
    setReplyUrgency(ideaReplyUrgency: IdeaReplyUrgency): Promise<void>;
    addReplyType(reply: Reply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApi.d.ts.map