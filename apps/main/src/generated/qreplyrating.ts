import {
	IQEntityInternal,
	IEntityIdProperties,
	IEntityCascadeGraph,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IEntitySelectProperties,
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
} from '@airport/tarmaq-query';
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
	ReplyGraph,
	ReplyEId,
	ReplyEOptionalId,
	ReplyEUpdateProperties,
	ReplyESelect,
	QReply,
	QReplyQId,
	QReplyQRelation,
} from './qreply';
import {
	IReply,
} from './reply';
import {
	IReplyRating,
} from './replyrating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ReplyRatingESelect
    extends AirEntityESelect, ReplyRatingEOptionalId {
	// Non-Id Properties
	upOrDownRating?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	reply?: ReplyESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReplyRatingEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ReplyRatingEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReplyRatingEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	upOrDownRating?: number | IQNumberField;

	// Non-Id Relations - _localIds only & no OneToMany's
	reply?: ReplyEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReplyRatingGraph
	extends ReplyRatingEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	upOrDownRating?: number | IQNumberField;

	// Relations
	reply?: ReplyGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ReplyRatingEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	UP_OR_DOWN_RATING?: number | IQNumberField;
	REPLIES_RID_1?: number | IQNumberField;
	REPLIES_AID_1?: number | IQNumberField;
	REPLIES_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReplyRatingECreateProperties
extends Partial<ReplyRatingEId>, ReplyRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReplyRatingECreateColumns
extends ReplyRatingEId, ReplyRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QReplyRating extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	upOrDownRating: IQNumberField;

	// Non-Id Relations
	reply: QReplyQRelation;

}


// Entity Id Interface
export interface QReplyRatingQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QReplyRatingQRelation
	extends QAirEntityQRelation<IReplyRating, QReplyRating>, QReplyRatingQId {
}

