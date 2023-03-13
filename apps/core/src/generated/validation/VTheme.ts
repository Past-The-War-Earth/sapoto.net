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
} from '@airport/final-approach';
import {
	TopicVDescriptor,
} from './VTopic';
import {
	Topic,
} from '../../ddl/Topic';



////////////////////
//  API INTERFACE //
////////////////////

export interface ThemeVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	name?: string | IVStringField;
	imageName?: string | IVStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topics?: TopicVDescriptor<Topic>

}


