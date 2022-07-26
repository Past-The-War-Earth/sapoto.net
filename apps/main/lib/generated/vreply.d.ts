import { IVBooleanField, IVNumberField, IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationThreadVDescriptor } from './vsituationthread';
import { SituationIdeaVDescriptor } from '@votecube/votecube/lib/to_be_generated/runtime-index';
import { ReplyRatingVDescriptor } from './vreplyrating';
export interface ReplyVDescriptor extends AirEntityVDescriptor {
    text?: string | IVStringField;
    isIdea?: boolean | IVBooleanField;
    isExperience?: boolean | IVBooleanField;
    isQuestion?: boolean | IVBooleanField;
    numberOfDownRatings?: number | IVNumberField;
    numberOfUpRatings?: number | IVNumberField;
    situationThread?: SituationThreadVDescriptor;
    parentReply?: ReplyVDescriptor;
    situationIdea?: SituationIdeaVDescriptor;
    childReplies?: ReplyVDescriptor;
    replyRatings?: ReplyRatingVDescriptor;
}
//# sourceMappingURL=vreply.d.ts.map