import { IAirEntity } from '@airport/holding-pattern';
import { ReplyRating } from '../ddl/ReplyRating';
import { ISituationThread } from './situationthread';
import { ISituationIdea } from '@votecube/votecube';
import { IReplyRating } from './replyrating';
import { IReplyType } from './replytype';
export interface IReply extends IAirEntity {
    text?: string;
    numberOfDownRatings?: number;
    numberOfUpRatings?: number;
    situationThread?: ISituationThread;
    parentReply?: IReply;
    situationIdea?: ISituationIdea;
    childReplies?: IReply[];
    replyRatings?: IReplyRating[];
    replyTypes?: IReplyType[];
    userRelyRating?: ReplyRating;
}
//# sourceMappingURL=reply.d.ts.map