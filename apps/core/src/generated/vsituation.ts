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
	TopicVDescriptor,
} from './vtopic';
import {
	ITopic,
} from './topic';
import {
	SituationRatingVDescriptor,
} from './vsituationrating';
import {
	ISituationRating,
} from './situationrating';
import {
	ISituation,
} from './situation';



////////////////////
//  API INTERFACE //
////////////////////

export interface SituationVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	text?: string | IVStringField;
	urgencyTotal?: number | IVNumberField;
	numberOfUrgencyRatings?: number | IVNumberField;
	importanceTotal?: number | IVNumberField;
	numberOfImportanceRatings?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicVDescriptor;
	ratings?: SituationRatingVDescriptor;

}


