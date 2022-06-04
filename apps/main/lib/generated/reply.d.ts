import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituationThread } from './situationthread';
import { IIdeaSituation } from '@votecube/votecube';
import { IReplyRating } from './replyrating';
import { IReplyType } from './replytype';
import { IIdeaUrgencyRating } from './ideaurgencyrating';
export interface IReply extends IRepositoryEntity {
    text?: string;
    situationThread?: ISituationThread;
    parentReply?: IReply;
    childReplies?: IReply[];
    ideaSituation?: IIdeaSituation;
    replyRatings?: IReplyRating[];
    replyTypes?: IReplyType[];
    urgencyRatings?: IIdeaUrgencyRating[];
    ratings?: {
        down: number;
        up: number;
        user: {
            rating: number;
        };
    };
    urgency?: {
        votes: number;
        total: number;
        user: {
            urgency: number;
        };
    };
}
//# sourceMappingURL=reply.d.ts.map