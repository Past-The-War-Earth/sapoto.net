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
	ITheme,
} from './theme';



////////////////////
//  API INTERFACE //
////////////////////

export interface ThemeVDescriptor
	extends AirEntityVDescriptor {
	// Id Properties

	// Non-Id Properties
	name?: string | IVStringField;
	imageName?: string | IVStringField;

	// Id Relations - full property interfaces

	// Non-Id relations (including OneToMany's)
	topics?: TopicVDescriptor;

}


