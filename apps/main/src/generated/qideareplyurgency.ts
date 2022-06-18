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
	IIdeaReplyUrgency,
} from './ideareplyurgency';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaReplyUrgencyESelect
    extends AirEntityESelect, IdeaReplyUrgencyEOptionalId {
	// Non-Id Properties
	urgency?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	reply?: ReplyESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaReplyUrgencyEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface IdeaReplyUrgencyEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaReplyUrgencyEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	urgency?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	reply?: ReplyEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaReplyUrgencyGraph
	extends IdeaReplyUrgencyEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	urgency?: number | IQNumberField;

	// Relations
	reply?: ReplyGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaReplyUrgencyEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	URGENCY?: number | IQNumberField;
	REPLIES_RID_1?: number | IQNumberField;
	REPLIES_AID_1?: number | IQNumberField;
	REPLIES_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaReplyUrgencyECreateProperties
extends Partial<IdeaReplyUrgencyEId>, IdeaReplyUrgencyEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaReplyUrgencyECreateColumns
extends IdeaReplyUrgencyEId, IdeaReplyUrgencyEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdeaReplyUrgency extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	urgency: IQNumberField;

	// Non-Id Relations
	reply: QReplyQRelation;

}


// Entity Id Interface
export interface QIdeaReplyUrgencyQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QIdeaReplyUrgencyQRelation
	extends QAirEntityQRelation<IIdeaReplyUrgency, QIdeaReplyUrgency>, QIdeaReplyUrgencyQId {
}

