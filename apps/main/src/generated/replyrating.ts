import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IReply,
} from './reply';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IReplyRating extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	upOrDownRating?: number;

	// Non-Id Relations
	reply?: IReply;

	// Transient Properties

	// Public Methods
	
}


