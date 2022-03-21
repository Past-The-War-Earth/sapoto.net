import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ISituation,
} from './situation';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituationRating extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	importanceRating?: number;
	urgencyRating?: number;

	// Non-Id Relations
	situation?: ISituation;

	// Transient Properties

	// Public Methods
	
}


