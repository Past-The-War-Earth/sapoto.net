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
	ThemeVDescriptor,
} from './VTheme';
import {
	Theme,
} from '../../ddl/Theme';
import {
	SituationVDescriptor,
} from './VSituation';
import {
	Situation,
} from '../../ddl/Situation';



////////////////////
//  API INTERFACE //
////////////////////

export interface TopicVDescriptor<T>
    extends AirEntityVDescriptor<T> {
	// Id Properties
	
	// Non-Id Properties
	name?: string | IVStringField;
	imagePath?: string | IVStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	theme?: ThemeVDescriptor<Theme>
	situations?: SituationVDescriptor<Situation>

}


