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
	SituationVDescriptor,
} from './vsituation';
import {
	Situation,
} from '../ddl/Situation';
import {
	ISituationRating,
} from './situationrating';



////////////////////
//  API INTERFACE //
////////////////////

export interface SituationRatingVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	importanceRating?: number | IVNumberField;
	urgencyRating?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situation?: SituationVDescriptor<Situation>

}


