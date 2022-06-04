import { IIdeaSituation, IdeaSituationApi } from "@votecube/votecube";
import { ReplyDao } from "../dao/ReplyDao";
import { ReplyRatingDao } from "../dao/ReplyRatingDao";
import { ReplyTypeDao } from "../dao/ReplyTypeDao";
import { Reply } from "../ddl/Reply";
import { ReplyRating } from "../ddl/ReplyRating";
export declare class ReplyApi {
    ideaSituationApi: IdeaSituationApi;
    replyDao: ReplyDao;
    replyRatingDao: ReplyRatingDao;
    replyTypeDao: ReplyTypeDao;
    addReply(reply: Reply): Promise<void>;
    getRepliesForSituationThread(situationThreadId: string, userUuid: string): Promise<Reply[]>;
    addIdea(reply: Reply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: ReplyRating): Promise<void>;
    addReplyType(reply: Reply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApi.d.ts.map