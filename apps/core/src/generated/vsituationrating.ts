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
	SituationVDescriptor,
} from './vsituation';
import {
	ISituation,
} from './situation';
import {
	ISituationRating,
} from './situationrating';



////////////////////
//  API INTERFACE //
////////////////////

export interface SituationRatingVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	importanceRating?: number | IVNumberField;
	urgencyRating?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situation?: SituationVDescriptor;

}


