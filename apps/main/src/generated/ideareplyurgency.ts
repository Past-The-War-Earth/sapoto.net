import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	IReply,
} from './reply';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IIdeaReplyUrgency extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	urgency?: number;

	// Non-Id Relations
	reply?: IReply;

	// Transient Properties

	// Public Methods
	
}


