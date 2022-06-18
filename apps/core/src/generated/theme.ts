import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ITopic,
} from './topic';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITheme extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	name?: string;
	imageName?: string;

	// Non-Id Relations
	topics?: ITopic[];

	// Transient Properties

	// Public Methods
	
}


