import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ISituation,
} from '@sapoto/core';
import {
	IReply,
} from './reply';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface ISituationThread extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	situation?: ISituation;
	replies?: IReply[];

	// Transient Properties

	// Public Methods
	
}


