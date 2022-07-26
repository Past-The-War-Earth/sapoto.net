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
	ISituation,
} from '@sapoto/core/lib/to_be_generated/runtime-index';
import {
	ReplyVDescriptor,
} from './vreply';
import {
	IReply,
} from './reply';
import {
	ISituationThread,
} from './situationthread';



////////////////////
//  API INTERFACE //
////////////////////

export interface SituationThreadVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	numberOfExperiences?: number | IVNumberField;
	numberOfIdeas?: number | IVNumberField;
	numberOfQuestions?: number | IVNumberField;
	numberOfReplies?: number | IVNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situation?: SituationVDescriptor;
	replies?: ReplyVDescriptor;

}


