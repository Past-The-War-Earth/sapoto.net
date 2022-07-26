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
	ReplyVDescriptor,
} from './vreply';
import {
	IReply,
} from './reply';
import {
	IReplyRating,
} from './replyrating';



////////////////////
//  API INTERFACE //
////////////////////

export interface ReplyRatingVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	upOrDownRating?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	reply?: ReplyVDescriptor;

}


