import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ReplyRating,
} from '../ddl/ReplyRating';
import {
	ISituationThread,
} from './situationthread';
import {
	ISituationIdea,
} from '@votecube/votecube';
import {
	IReplyRating,
} from './replyrating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IReply extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	text?: string;
	isIdea?: boolean;
	isExperience?: boolean;
	isQuestion?: boolean;
	numberOfDownRatings?: number;
	numberOfUpRatings?: number;

	// Non-Id Relations
	situationThread?: ISituationThread;
	parentReply?: IReply;
	situationIdea?: ISituationIdea;
	childReplies?: IReply[];
	replyRatings?: IReplyRating[];

	// Transient Properties
	userRelyRating?: ReplyRating;

	// Public Methods
	
}


