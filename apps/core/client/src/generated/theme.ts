import {
	IRepositoryEntity,
} from '@airport/holding-pattern-client';
import {
	ITopic,
} from './topic';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ITheme extends IRepositoryEntity {
	
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


