import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ITopic,
} from './topic';
import {
	ISituationRating,
} from './situationrating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituation extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	text?: string;

	// Non-Id Relations
	topic?: ITopic;
	ratings?: ISituationRating[];

	// Transient Properties

	// Public Methods
	
}


