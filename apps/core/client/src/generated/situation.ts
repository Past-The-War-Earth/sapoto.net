import type {
	IRepositoryEntity,
} from '@airport/holding-pattern-client';
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
	counts?: { experiences: number; ideas: number; questions: number; reasons: number; replies: number; };
	eisenhowerMatrix?: { importance: number; urgency: number; votes: number; user: { importance: number; urgency: number; }; };

	// Public Methods

}


