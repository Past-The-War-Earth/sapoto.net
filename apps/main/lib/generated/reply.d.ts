import { IAirEntity } from '@airport/holding-pattern';
import { ReplyRating } from '../ddl/ReplyRating';
import { ISituationThread } from './situationthread';
import { ISituationIdea } from '@votecube/votecube';
import { IReplyRating } from './replyrating';
export interface IReply extends IAirEntity {
    text?: string;
    isIdea?: boolean;
    isExperience?: boolean;
    isQuestion?: boolean;
    numberOfDownRatings?: number;
    numberOfUpRatings?: number;
    situationThread?: ISituationThread;
    parentReply?: IReply;
    situationIdea?: ISituationIdea;
    childReplies?: IReply[];
    replyRatings?: IReplyRating[];
    userRelyRating?: ReplyRating;
}
//# sourceMappingURL=reply.d.ts.map