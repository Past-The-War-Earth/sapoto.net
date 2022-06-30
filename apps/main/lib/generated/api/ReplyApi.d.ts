import { Reply } from '../../ddl/Reply';
import { ReplyRating } from '../../ddl/ReplyRating';
export declare class ReplyApi {
    constructor();
    replyApi: ReplyApi;
    addReply(reply: Reply): Promise<void>;
    getRepliesForSituationThread(situationThreadUuId: string): Promise<Reply[]>;
    addIdea(reply: Reply): Promise<void>;
    rateReply(replyRating: ReplyRating): Promise<void>;
    updateCounts(situationThreadUuId: string): Promise<void>;
    setReplyType(reply: Reply, type: 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApi.d.ts.map