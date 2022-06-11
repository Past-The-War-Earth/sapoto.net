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
	SituationRatingGraph,
	SituationRatingEId,
	SituationRatingEOptionalId,
	SituationRatingEUpdateProperties,
	SituationRatingESelect,
	QSituationRating,
	QSituationRatingQId,
	QSituationRatingQRelation,
} from './qsituationrating';
import {
	ISituationRating,
} from './situationrating';
import {
	ISituation,
} from './situation';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationESelect
    extends AirEntityESelect, SituationEOptionalId {
	// Non-Id Properties
	text?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	topic?: TopicESelect;
	ratings?: SituationRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SituationEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	text?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	topic?: TopicEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationGraph
	extends SituationEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	text?: string | IQStringField;

	// Relations
	topic?: TopicGraph;
	ratings?: SituationRatingGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	TEXT?: string | IQStringField;
	TOPIC_RID_1?: number | IQNumberField;
	TOPIC_AID_1?: number | IQNumberField;
	TOPIC_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationECreateProperties
extends Partial<SituationEId>, SituationEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationECreateColumns
extends SituationEId, SituationEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituation extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	text: IQStringField;

	// Non-Id Relations
	topic: QTopicQRelation;
	ratings: IQAirEntityOneToManyRelation<ISituationRating, QSituationRating>;

}


// Entity Id Interface
export interface QSituationQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSituationQRelation
	extends QAirEntityQRelation<ISituation, QSituation>, QSituationQId {
}

