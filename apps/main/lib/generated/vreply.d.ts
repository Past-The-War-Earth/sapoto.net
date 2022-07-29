import { IVBooleanField, IVNumberField, IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationThreadVDescriptor } from './vsituationthread';
import { SituationThread } from '../ddl/SituationThread';
import { Reply } from '../ddl/Reply';
import { SituationIdeaVDescriptor, SituationIdea } from '@votecube/votecube/lib/to_be_generated/runtime-index';
import { ReplyRatingVDescriptor } from './vreplyrating';
import { ReplyRating } from '../ddl/ReplyRating';
export interface ReplyVDescriptor<T> extends AirEntityVDescriptor<T> {
    text?: string | IVStringField;
    isIdea?: boolean | IVBooleanField;
    isExperience?: boolean | IVBooleanField;
    isQuestion?: boolean | IVBooleanField;
    numberOfDownRatings?: number | IVNumberField;
    numberOfUpRatings?: number | IVNumberField;
    situationThread?: SituationThreadVDescriptor<SituationThread>;
    parentReply?: ReplyVDescriptor<Reply>;
    situationIdea?: SituationIdeaVDescriptor<SituationIdea>;
    childReplies?: ReplyVDescriptor<Reply>;
    replyRatings?: ReplyRatingVDescriptor<ReplyRating>;
}
//# sourceMappingURL=vreply.d.ts.map