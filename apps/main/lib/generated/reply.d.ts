import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituationThread } from './situationthread';
import { ISituationIdea } from '@votecube/votecube';
import { IReplyRating } from './replyrating';
import { IReplyType } from './replytype';
import { IIdeaUrgencyRating } from './ideaurgencyrating';
export interface IReply extends IRepositoryEntity {
    text?: string;
    numberOfDownRatings?: number;
    numberOfUpRatings?: number;
    urgencyTotal?: number;
    numberOfUrgencyRatings?: number;
    situationThread?: ISituationThread;
    parentReply?: IReply;
    situationIdea?: ISituationIdea;
    childReplies?: IReply[];
    replyRatings?: IReplyRating[];
    replyTypes?: IReplyType[];
    urgencyRatings?: IIdeaUrgencyRating[];
}
//# sourceMappingURL=reply.d.ts.map