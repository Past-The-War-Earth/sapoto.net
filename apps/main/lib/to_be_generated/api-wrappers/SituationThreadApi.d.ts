import { IInterAppAPIClient } from "@airport/ground-control";
import { IReply, IReplyRating, ISituationThread } from "../../generated/interfaces";
import { IIdeaSituation } from "@votecube/votecube";
export interface ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    addReply(reply: IReply): Promise<void>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
export declare class SituationThreadApi {
    interAppApiClient: IInterAppAPIClient;
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    addReply(reply: IReply): Promise<void>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map