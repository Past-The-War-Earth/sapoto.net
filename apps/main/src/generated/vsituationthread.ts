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
	Situation,
} from '@sapoto/core/lib/to_be_generated/runtime-index';
import {
	ReplyVDescriptor,
} from './vreply';
import {
	Reply,
} from '../ddl/Reply';
import {
	ISituationThread,
} from './situationthread';



////////////////////
//  API INTERFACE //
////////////////////

export interface SituationThreadVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	numberOfExperiences?: number | IVNumberField;
	numberOfIdeas?: number | IVNumberField;
	numberOfQuestions?: number | IVNumberField;
	numberOfReplies?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situation?: SituationVDescriptor<Situation>
	replies?: ReplyVDescriptor<Reply>

}


