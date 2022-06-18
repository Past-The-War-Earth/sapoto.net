import {
	IAirEntity,
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

export interface ISituation extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	text?: string;

	// Non-Id Relations
	topic?: ITopic;
	ratings?: ISituationRating[];

	// Transient Properties
	eisenhowerMatrix?: { importance: number; urgency: number; votes: number; user: {    importance: number;    urgency: number;}; };

	// Public Methods
	
}


