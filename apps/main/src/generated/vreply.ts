import {
	IEntityVDescriptor,
	IVBooleanField,
	IVDateField,
	IVNumberField,
	IVStringField,
	IVUntypedField,
} from '@airport/airbridge-validate';
import {
	AirEntityVDescriptor,
} from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import {
	SituationThreadVDescriptor,
} from './vsituationthread';
import {
	ISituationThread,
} from './situationthread';
import {
	SituationIdeaVDescriptor,
	ISituationIdea,
} from '@votecube/votecube/lib/to_be_generated/runtime-index';
import {
	ReplyRatingVDescriptor,
} from './vreplyrating';
import {
	IReplyRating,
} from './replyrating';
import {
	IReply,
} from './reply';



////////////////////
//  API INTERFACE //
////////////////////

export interface ReplyVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	text?: string | IVStringField;
	isIdea?: boolean | IVBooleanField;
	isExperience?: boolean | IVBooleanField;
	isQuestion?: boolean | IVBooleanField;
	numberOfDownRatings?: number | IVNumberField;
	numberOfUpRatings?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situationThread?: SituationThreadVDescriptor;
	parentReply?: ReplyVDescriptor;
	situationIdea?: SituationIdeaVDescriptor;
	childReplies?: ReplyVDescriptor;
	replyRatings?: ReplyRatingVDescriptor;

}


