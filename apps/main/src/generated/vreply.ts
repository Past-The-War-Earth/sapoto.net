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
	SituationThread,
} from '../ddl/SituationThread';
import {
	Reply,
} from '../ddl/Reply';
import {
	SituationIdeaVDescriptor,
	SituationIdea,
} from '@votecube/votecube/lib/to_be_generated/runtime-index';
import {
	ReplyRatingVDescriptor,
} from './vreplyrating';
import {
	ReplyRating,
} from '../ddl/ReplyRating';
import {
	IReply,
} from './reply';



////////////////////
//  API INTERFACE //
////////////////////

export interface ReplyVDescriptor<T>
    extends AirEntityVDescriptor<T> {
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
	situationThread?: SituationThreadVDescriptor<SituationThread>
	parentReply?: ReplyVDescriptor<Reply>
	situationIdea?: SituationIdeaVDescriptor<SituationIdea>
	childReplies?: ReplyVDescriptor<Reply>
	replyRatings?: ReplyRatingVDescriptor<ReplyRating>

}


