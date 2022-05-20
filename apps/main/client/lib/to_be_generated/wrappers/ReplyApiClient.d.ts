import { IIdeaSituation } from "@votecube/votecube";
import { IReply, IReplyRating } from "../../generated/interfaces";
export interface IReplyApi {
    addReply(reply: IReply): Promise<void>;
    getRepliesForSituationThread(situationThreadId: string): Promise<IReply[]>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
export declare class ReplyApi implements IReplyApi {
    addReply(reply: IReply): Promise<void>;
    getRepliesForSituationThread(situationThreadId: string): Promise<IReply[]>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApiClient.d.ts.map