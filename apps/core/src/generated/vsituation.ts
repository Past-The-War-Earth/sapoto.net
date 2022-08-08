import {
	IEntityVDescriptor,
	IVBooleanField,
	IVDateField,
	IVNumberField,
	IVStringField,
	IVUntypedField,
} from '@airbridge/validate';
import {
	AirEntityVDescriptor,
} from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import {
	TopicVDescriptor,
} from './vtopic';
import {
	Topic,
} from '../ddl/Topic';
import {
	SituationRatingVDescriptor,
} from './vsituationrating';
import {
	SituationRating,
} from '../ddl/SituationRating';
import {
	ISituation,
} from './situation';



////////////////////
//  API INTERFACE //
////////////////////

export interface SituationVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	text?: string | IVStringField;
	urgencyTotal?: number | IVNumberField;
	numberOfUrgencyRatings?: number | IVNumberField;
	importanceTotal?: number | IVNumberField;
	numberOfImportanceRatings?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicVDescriptor<Topic>
	ratings?: SituationRatingVDescriptor<SituationRating>

}


