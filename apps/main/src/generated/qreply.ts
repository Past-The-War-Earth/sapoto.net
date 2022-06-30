import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
	IEntityDatabaseFacade,
	IEntityFind,
	IEntityFindOne,
	IEntitySearch,
	IEntitySearchOne,
	IQBooleanField,
	IQDateField,
	IQNumberField,
	IQOneToManyRelation,
	IQStringField,
	IQUntypedField,
	IQEntity,
	IQRelation,
	IQAirEntityOneToManyRelation,
	IQAirEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-traffic-control';
import {
	AirEntityGraph,
	AirEntityEId,
	AirEntityEUpdateColumns,
	AirEntityEUpdateProperties,
	AirEntityESelect,
	QAirEntityQId,
	QAirEntityQRelation,
	QAirEntity,
} from '@airport/holding-pattern';
import {
	SituationThreadGraph,
	SituationThreadEId,
	SituationThreadEOptionalId,
	SituationThreadEUpdateProperties,
	SituationThreadESelect,
	QSituationThread,
	QSituationThreadQId,
	QSituationThreadQRelation,
} from './qsituationthread';
import {
	ISituationThread,
} from './situationthread';
import {
	SituationIdeaGraph,
	SituationIdeaEId,
	SituationIdeaEOptionalId,
	SituationIdeaEUpdateProperties,
	SituationIdeaESelect,
	QSituationIdea,
	QSituationIdeaQId,
	QSituationIdeaQRelation,
	ISituationIdea,
} from '@votecube/votecube';
import {
	ReplyRatingGraph,
	ReplyRatingEId,
	ReplyRatingEOptionalId,
	ReplyRatingEUpdateProperties,
	ReplyRatingESelect,
	QReplyRating,
	QReplyRatingQId,
	QReplyRatingQRelation,
} from './qreplyrating';
import {
	IReplyRating,
} from './replyrating';
import {
	IReply,
} from './reply';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ReplyESelect
    extends AirEntityESelect, ReplyEOptionalId {
	// Non-Id Properties
	text?: string | IQStringField;
	isIdea?: boolean | IQBooleanField;
	isExperience?: boolean | IQBooleanField;
	isQuestion?: boolean | IQBooleanField;
	numberOfDownRatings?: number | IQNumberField;
	numberOfUpRatings?: number | IQNumberField;
	numberOfExperiences?: number | IQNumberField;
	numberOfQuestions?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situationThread?: SituationThreadESelect;
	parentReply?: ReplyESelect;
	situationIdea?: SituationIdeaESelect;
	childReplies?: ReplyESelect;
	replyRatings?: ReplyRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReplyEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ReplyEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReplyEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	text?: string | IQStringField;
	isIdea?: boolean | IQBooleanField;
	isExperience?: boolean | IQBooleanField;
	isQuestion?: boolean | IQBooleanField;
	numberOfDownRatings?: number | IQNumberField;
	numberOfUpRatings?: number | IQNumberField;
	numberOfExperiences?: number | IQNumberField;
	numberOfQuestions?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	situationThread?: SituationThreadEOptionalId;
	parentReply?: ReplyEOptionalId;
	situationIdea?: SituationIdeaEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReplyGraph
	extends ReplyEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	text?: string | IQStringField;
	isIdea?: boolean | IQBooleanField;
	isExperience?: boolean | IQBooleanField;
	isQuestion?: boolean | IQBooleanField;
	numberOfDownRatings?: number | IQNumberField;
	numberOfUpRatings?: number | IQNumberField;
	numberOfExperiences?: number | IQNumberField;
	numberOfQuestions?: number | IQNumberField;

	// Relations
	situationThread?: SituationThreadGraph;
	parentReply?: ReplyGraph;
	situationIdea?: SituationIdeaGraph;
	childReplies?: ReplyGraph[];
	replyRatings?: ReplyRatingGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ReplyEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	TEXT?: string | IQStringField;
	IS_IDEA?: boolean | IQBooleanField;
	IS_EXPERIENCE?: boolean | IQBooleanField;
	IS_QUESTION?: boolean | IQBooleanField;
	NUMBER_OF_DOWN_RATINGS?: number | IQNumberField;
	NUMBER_OF_UP_RATINGS?: number | IQNumberField;
	NUMBER_OF_EXPERIENCES?: number | IQNumberField;
	NUMBER_OF_QUESTIONS?: number | IQNumberField;
	SITUATION_THREADS_RID_1?: number | IQNumberField;
	SITUATION_THREADS_AID_1?: number | IQNumberField;
	SITUATION_THREADS_ARID_1?: number | IQNumberField;
	REPLIES_RID_1?: number | IQNumberField;
	REPLIES_AID_1?: number | IQNumberField;
	REPLIES_ARID_1?: number | IQNumberField;
	SITUATION_IDEAS_RID_1?: number | IQNumberField;
	SITUATION_IDEAS_AID_1?: number | IQNumberField;
	SITUATION_IDEAS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReplyECreateProperties
extends Partial<ReplyEId>, ReplyEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReplyECreateColumns
extends ReplyEId, ReplyEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QReply extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	text: IQStringField;
	isIdea: IQBooleanField;
	isExperience: IQBooleanField;
	isQuestion: IQBooleanField;
	numberOfDownRatings: IQNumberField;
	numberOfUpRatings: IQNumberField;
	numberOfExperiences: IQNumberField;
	numberOfQuestions: IQNumberField;

	// Non-Id Relations
	situationThread: QSituationThreadQRelation;
	parentReply: QReplyQRelation;
	situationIdea: QSituationIdeaQRelation;
	childReplies: IQAirEntityOneToManyRelation<IReply, QReply>;
	replyRatings: IQAirEntityOneToManyRelation<IReplyRating, QReplyRating>;

}


// Entity Id Interface
export interface QReplyQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QReplyQRelation
	extends QAirEntityQRelation<IReply, QReply>, QReplyQId {
}

