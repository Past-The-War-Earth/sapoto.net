import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	IReply,
} from './reply';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IReplyType extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	type?: string;

	// Non-Id Relations
	reply?: IReply;

	// Transient Properties

	// Public Methods
	
}


