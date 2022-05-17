import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituationThread } from './situationthread';
import { IIdeaSituation } from '@votecube/votecube';
import { IReplyRating } from './replyrating';
import { IReplyType } from './replytype';
import { IIdeaUrgencyRating } from './ideaurgencyrating';
export interface IReply extends IRepositoryEntity {
    situationThread?: ISituationThread;
    parentReply?: IReply;
    childReplies?: IReply[];
    ideaSituation?: IIdeaSituation;
    replyRatings?: IReplyRating[];
    replyTypes?: IReplyType[];
    urgencyRatings?: IIdeaUrgencyRating[];
    eisenhowerMatrix?: {
        importance: number;
        urgency: number;
        votes: number;
        user: {
            importance: number;
            urgency: number;
        };
    };
}
//# sourceMappingURL=reply.d.ts.map