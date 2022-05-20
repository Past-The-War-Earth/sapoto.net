import { IInterAppAPIClient } from "@airport/ground-control";
import { IReply, IReplyRating } from "../../generated/interfaces";
import { IIdeaSituation } from "@votecube/votecube";
export interface IReplyApi {
    getRepliesForSituation(situationId: string): Promise<IReply[]>;
    addReply(reply: IReply): Promise<void>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
export declare class ReplyApi implements IReplyApi {
    interAppApiClient: IInterAppAPIClient;
    getRepliesForSituation(situationId: string): Promise<IReply[]>;
    addReply(reply: IReply): Promise<void>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApi.d.ts.map