import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITheme,
} from './theme';
import {
	ISituation,
} from './situation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITopic extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;
	imagePath?: string;

	// Non-Id Relations
	theme?: ITheme;
	situations?: ISituation[];

	// Transient Properties

	// Public Methods
	
}


