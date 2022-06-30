import {
	IAirEntity,
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

export interface ISituationThread extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	numberOfExperiences?: number;
	numberOfIdeas?: number;
	numberOfQuestions?: number;
	numberOfReplies?: number;

	// Non-Id Relations
	situation?: ISituation;
	replies?: IReply[];

	// Transient Properties

	// Public Methods
	
}


