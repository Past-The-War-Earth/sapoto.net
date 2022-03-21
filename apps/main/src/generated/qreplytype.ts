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
} from '@airport/air-control';
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
	IReplyType,
} from './replytype';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ReplyTypeESelect
    extends RepositoryEntityESelect, ReplyTypeEOptionalId {
	// Non-Id Properties
	type?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	reply?: ReplyESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReplyTypeEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ReplyTypeEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReplyTypeEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	type?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	reply?: ReplyEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReplyTypeGraph
	extends ReplyTypeEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	type?: string | IQStringField;

	// Relations
	reply?: ReplyGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ReplyTypeEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	TYPE?: string | IQStringField;
	REPLIES_RID_1?: number | IQNumberField;
	REPLIES_AID_1?: number | IQNumberField;
	REPLIES_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReplyTypeECreateProperties
extends Partial<ReplyTypeEId>, ReplyTypeEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReplyTypeECreateColumns
extends ReplyTypeEId, ReplyTypeEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QReplyType extends QRepositoryEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	type: IQStringField;

	// Non-Id Relations
	reply: QReplyQRelation;

}


// Entity Id Interface
export interface QReplyTypeQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QReplyTypeQRelation
	extends QRepositoryEntityQRelation<IReplyType, QReplyType>, QReplyTypeQId {
}

