import { IIdeaSituation } from '@votecube/votecube';
import { Reply } from '../../ddl/Reply';
import { ReplyRating } from '../../ddl/ReplyRating';
export declare class ReplyApi {
    constructor();
    replyApi: ReplyApi;
    addReply(reply: Reply): Promise<void>;
    getRepliesForSituationThread(situationThreadId: string): Promise<Reply[]>;
    addIdea(reply: Reply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: ReplyRating): Promise<void>;
    addReplyType(reply: Reply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApi.d.ts.map