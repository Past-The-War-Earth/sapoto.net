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
	TopicGraph,
	TopicEId,
	TopicEOptionalId,
	TopicEUpdateProperties,
	TopicESelect,
	QTopic,
	QTopicQId,
	QTopicQRelation,
} from './qtopic';
import {
	ITopic,
} from './topic';
import {
	IUserTopicFavorite,
} from './usertopicfavorite';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface UserTopicFavoriteESelect
    extends RepositoryEntityESelect, UserTopicFavoriteEOptionalId {
	// Non-Id Properties
	favorite?: boolean | IQBooleanField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserTopicFavoriteEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface UserTopicFavoriteEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserTopicFavoriteEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	favorite?: boolean | IQBooleanField;

	// Non-Id Relations - ids only & no OneToMany's
	topic?: TopicEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserTopicFavoriteGraph
	extends UserTopicFavoriteEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	favorite?: boolean | IQBooleanField;

	// Relations
	topic?: TopicGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface UserTopicFavoriteEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	FAVORITE?: boolean | IQBooleanField;
	TOPIC_RID_1?: number | IQNumberField;
	TOPIC_AID_1?: number | IQNumberField;
	TOPIC_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserTopicFavoriteECreateProperties
extends Partial<UserTopicFavoriteEId>, UserTopicFavoriteEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserTopicFavoriteECreateColumns
extends UserTopicFavoriteEId, UserTopicFavoriteEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserTopicFavorite extends QRepositoryEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	favorite: IQBooleanField;

	// Non-Id Relations
	topic: QTopicQRelation;

}


// Entity Id Interface
export interface QUserTopicFavoriteQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QUserTopicFavoriteQRelation
	extends QRepositoryEntityQRelation<IUserTopicFavorite, QUserTopicFavorite>, QUserTopicFavoriteQId {
}

