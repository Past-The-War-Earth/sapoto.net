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
	IQManyToOneInternalRelation,
	IQAirEntityOneToManyRelation,
	IQManyToOneAirEntityRelation,
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
} from '@airport/final-approach';
import {
	TopicGraph,
	TopicEId,
	TopicEOptionalId,
	TopicEUpdateProperties,
	TopicESelect,
	QTopic,
	QTopicQId,
	QTopicQRelation,
} from './QTopic';
import {
	Topic,
} from '../../ddl/Topic';
import {
	SituationRatingGraph,
	SituationRatingEId,
	SituationRatingEOptionalId,
	SituationRatingEUpdateProperties,
	SituationRatingESelect,
	QSituationRating,
	QSituationRatingQId,
	QSituationRatingQRelation,
} from './QSituationRating';
import {
	SituationRating,
} from '../../ddl/SituationRating';
import {
	Situation,
} from '../../ddl/Situation';


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
	urgencyTotal?: number | IQNumberField;
	numberOfUrgencyRatings?: number | IQNumberField;
	importanceTotal?: number | IQNumberField;
	numberOfImportanceRatings?: number | IQNumberField;

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
	urgencyTotal?: number | IQNumberField;
	numberOfUrgencyRatings?: number | IQNumberField;
	importanceTotal?: number | IQNumberField;
	numberOfImportanceRatings?: number | IQNumberField;

	// Non-Id Relations - _localIds only & no OneToMany's
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
	urgencyTotal?: number | IQNumberField;
	numberOfUrgencyRatings?: number | IQNumberField;
	importanceTotal?: number | IQNumberField;
	numberOfImportanceRatings?: number | IQNumberField;

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
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	TEXT?: string | IQStringField;
	URGENCY_TOTAL?: number | IQNumberField;
	NUMBER_OF_URGENCY_RATINGS?: number | IQNumberField;
	IMPORTANCE_TOTAL?: number | IQNumberField;
	NUMBER_OF_IMPORTANCE_RATINGS?: number | IQNumberField;
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
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
export interface QSituation<IQE extends QSituation = any> extends QAirEntity<IQE | QSituation>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	text: IQStringField;
	urgencyTotal: IQNumberField;
	numberOfUrgencyRatings: IQNumberField;
	importanceTotal: IQNumberField;
	numberOfImportanceRatings: IQNumberField;

	// Non-Id Relations
	topic: QTopicQRelation;
	ratings: IQAirEntityOneToManyRelation<SituationRating, QSituationRating>;

}

// Entity Id Interface
export interface QSituationQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSituationQRelation
	extends QAirEntityQRelation<Situation, QSituation>, QSituationQId {
}