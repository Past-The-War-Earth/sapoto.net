import { IAirEntity } from '@airport/holding-pattern';
import { ReplyRating } from '../ddl/ReplyRating';
import { IdeaReplyUrgency } from '../ddl/IdeaReplyUrgency';
import { ISituationThread } from './situationthread';
import { ISituationIdea } from '@votecube/votecube';
import { IReplyRating } from './replyrating';
import { IReplyType } from './replytype';
import { IIdeaReplyUrgency } from './ideareplyurgency';
export interface IReply extends IAirEntity {
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
    ideaReplyUrgencies?: IIdeaReplyUrgency[];
    userRelyRating?: ReplyRating;
    userIdeaReplyUrgency?: IdeaReplyUrgency;
}
//# sourceMappingURL=reply.d.ts.map