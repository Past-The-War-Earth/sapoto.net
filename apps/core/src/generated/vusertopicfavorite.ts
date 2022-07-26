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
	IUserTopicFavorite,
} from './usertopicfavorite';



////////////////////
//  API INTERFACE //
////////////////////

export interface UserTopicFavoriteVDescriptor
    extends AirEntityVDescriptor {
	// Id Properties
	
	// Non-Id Properties
	favorite?: boolean | IVBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicVDescriptor;

}


