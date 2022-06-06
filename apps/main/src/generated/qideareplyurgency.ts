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
	IQRepositoryEntityOneToManyRelation,
	IQRepositoryEntityRelation,
	RawDelete,
	RawUpdate,
} from '@airport/air-traffic-control';
import {
	RepositoryEntityGraph,
	RepositoryEntityEId,
	RepositoryEntityEUpdateColumns,
	RepositoryEntityEUpdateProperties,
	RepositoryEntityESelect,
	QRepositoryEntityQId,
	QRepositoryEntityQRelation,
	QRepositoryEntity,
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
    extends RepositoryEntityESelect, IdeaReplyUrgencyEOptionalId {
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
    extends RepositoryEntityEId {
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
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	urgency?: number | IQNumberField;

	// Non-Id Relations - ids only & no OneToMany's
	reply?: ReplyEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaReplyUrgencyGraph
	extends IdeaReplyUrgencyEOptionalId, RepositoryEntityGraph {
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
	extends RepositoryEntityEUpdateColumns {
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
export interface QIdeaReplyUrgency extends QRepositoryEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	urgency: IQNumberField;

	// Non-Id Relations
	reply: QReplyQRelation;

}


// Entity Id Interface
export interface QIdeaReplyUrgencyQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QIdeaReplyUrgencyQRelation
	extends QRepositoryEntityQRelation<IIdeaReplyUrgency, QIdeaReplyUrgency>, QIdeaReplyUrgencyQId {
}

