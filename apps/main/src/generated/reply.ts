import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ISituationThread,
} from './situationthread';
import {
	IIdeaSituation,
} from '@votecube/votecube';
import {
	IReplyRating,
} from './replyrating';
import {
	IReplyType,
} from './replytype';
import {
	IIdeaUrgencyRating,
} from './ideaurgencyrating';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IReply extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties

	// Non-Id Relations
	situationThread?: ISituationThread;
	parentReply?: IReply;
	childReplies?: IReply[];
	ideaSituation?: IIdeaSituation;
	replyRatings?: IReplyRating[];
	replyTypes?: IReplyType[];
	urgencyRatings?: IIdeaUrgencyRating[];

	// Transient Properties
	eisenhowerMatrix?: { priority: number; urgency: number; votes: number; user: {    priority: number;    urgency: number;}; };

	// Public Methods
	
}


