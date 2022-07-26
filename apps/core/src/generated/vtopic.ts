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
	ThemeVDescriptor,
} from './vtheme';
import {
	ITheme,
} from './theme';
import {
	SituationVDescriptor,
} from './vsituation';
import {
	ISituation,
} from './situation';
import {
	ITopic,
} from './topic';



////////////////////
//  API INTERFACE //
////////////////////

export interface TopicVDescriptor
	extends AirEntityVDescriptor {
	// Id Properties

	// Non-Id Properties
	name?: string | IVStringField;
	imagePath?: string | IVStringField;

	// Id Relations - full property interfaces

	// Non-Id relations (including OneToMany's)
	theme?: ThemeVDescriptor;
	situations?: SituationVDescriptor;

}


