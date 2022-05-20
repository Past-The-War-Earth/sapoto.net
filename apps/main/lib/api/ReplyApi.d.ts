import { RepositoryEntityId } from "@airport/air-traffic-control";
import { IIdeaSituation, IIdeaSituationApi } from "@votecube/votecube";
import { IReplyDao } from "../dao/ReplyDao";
import { IReplyRatingDao } from "../dao/ReplyRatingDao";
import { IReplyTypeDao } from "../dao/ReplyTypeDao";
import { IReply } from "../generated/reply";
import { IReplyRating } from "../generated/replyrating";
export interface IReplyApi {
    addReply(reply: IReply): Promise<void>;
    getRepliesForSituation(situationId: RepositoryEntityId): Promise<IReply[]>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
export declare class ReplyApi implements IReplyApi {
    ideaSituationApi: IIdeaSituationApi;
    replyDao: IReplyDao;
    replyRatingDao: IReplyRatingDao;
    replyTypeDao: IReplyTypeDao;
    addReply(reply: IReply): Promise<void>;
    getRepliesForSituation(situationId: RepositoryEntityId): Promise<IReply[]>;
    addIdea(reply: IReply, ideaSituation: IIdeaSituation): Promise<void>;
    rateReply(replyRating: IReplyRating): Promise<void>;
    addReplyType(reply: IReply, type: 'comment' | 'experience' | 'idea' | 'question'): Promise<void>;
}
//# sourceMappingURL=ReplyApi.d.ts.map