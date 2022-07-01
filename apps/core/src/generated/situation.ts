import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	SituationRating,
} from '../ddl/SituationRating';
import {
	ITopic,
} from './topic';
import {
	ISituationRating,
} from './situationrating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituation extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	text?: string;
	urgencyTotal?: number;
	numberOfUrgencyRatings?: number;
	importanceTotal?: number;
	numberOfImportanceRatings?: number;

	// Non-Id Relations
	topic?: ITopic;
	ratings?: ISituationRating[];

	// Transient Properties
	userRating?: SituationRating;

	// Public Methods
	
}


