import {
	IAirEntity,
} from '@airport/holding-pattern';
import {
	ISituationThread,
} from './situationthread';
import {
	ISituationIdea,
} from '@votecube/votecube';
import {
	IReplyRating,
} from './replyrating';
import {
	IReplyType,
} from './replytype';
import {
	IIdeaReplyUrgency,
} from './ideareplyurgency';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IReply extends IAirEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	text?: string;
	numberOfDownRatings?: number;
	numberOfUpRatings?: number;
	urgencyTotal?: number;
	numberOfUrgencyRatings?: number;

	// Non-Id Relations
	situationThread?: ISituationThread;
	parentReply?: IReply;
	situationIdea?: ISituationIdea;
	childReplies?: IReply[];
	replyRatings?: IReplyRating[];
	replyTypes?: IReplyType[];
	ideaReplyUrgencies?: IIdeaReplyUrgency[];

	// Transient Properties

	// Public Methods
	
}


