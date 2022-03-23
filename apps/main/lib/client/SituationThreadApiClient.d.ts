import { IReply, IReplyRating, ISituationThread } from "../generated/interfaces";
import { IIdeaSituation } from "@votecube/votecube";
export declare class SituationThreadApiClient {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    addReply(reply: IReply): Promise<void>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=SituationThreadApiClient.d.ts.map