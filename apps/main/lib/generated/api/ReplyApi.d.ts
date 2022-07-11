import { Reply } from '../../ddl/Reply';
import { ReplyRating } from '../../ddl/ReplyRating';
import { SituationThread } from '../../ddl/SituationThread';
export declare class ReplyApi {
    constructor();
    replyApi: ReplyApi;
    addReply(reply: Reply): Promise<void>;
    getRepliesForSituationThread(situationThreadId: string | SituationThread): Promise<Reply[]>;
    rateReply(replyRating: ReplyRating): Promise<void>;
    updateCounts(situationThreadUuId: string): Promise<void>;
    setReplyType(reply: Reply, type: 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApi.d.ts.map