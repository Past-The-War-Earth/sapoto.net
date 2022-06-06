import { ISituationIdea } from '@votecube/votecube';
import { IdeaReplyUrgency } from '../../ddl/IdeaReplyUrgency';
import { Reply } from '../../ddl/Reply';
import { ReplyRating } from '../../ddl/ReplyRating';
export declare class ReplyApi {
    constructor();
    replyApi: ReplyApi;
    addReply(reply: Reply): Promise<void>;
    getRepliesForSituationThread(situationThreadId: string): Promise<Reply[]>;
    addIdea(reply: Reply, situationIdea: ISituationIdea): Promise<void>;
    rateReply(replyRating: ReplyRating, replyUuId: string, situationThreadId: string): Promise<void>;
    setReplyUrgency(ideaReplyUrgency: IdeaReplyUrgency, replyUuId: string, situationThreadId: string): Promise<void>;
    addReplyType(reply: Reply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApi.d.ts.map