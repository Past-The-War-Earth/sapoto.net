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
	SituationGraph,
	SituationEId,
	SituationEOptionalId,
	SituationEUpdateProperties,
	SituationESelect,
	QSituation,
	QSituationQId,
	QSituationQRelation,
} from './qsituation';
import {
	ISituation,
} from './situation';
import {
	ISituationRating,
} from './situationrating';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationRatingESelect
    extends AirEntityESelect, SituationRatingEOptionalId {
	// Non-Id Properties
	importanceRating?: number | IQNumberField;
	urgencyRating?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situation?: SituationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationRatingEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SituationRatingEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationRatingEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	importanceRating?: number | IQNumberField;
	urgencyRating?: number | IQNumberField;

	// Non-Id Relations - _localIds only & no OneToMany's
	situation?: SituationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationRatingGraph
	extends SituationRatingEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	importanceRating?: number | IQNumberField;
	urgencyRating?: number | IQNumberField;

	// Relations
	situation?: SituationGraph;

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationRatingEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	IMPORTANCE_RATING?: number | IQNumberField;
	URGENCY_RATING?: number | IQNumberField;
	SITUATIONS_RID_1?: number | IQNumberField;
	SITUATIONS_AID_1?: number | IQNumberField;
	SITUATIONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationRatingECreateProperties
extends Partial<SituationRatingEId>, SituationRatingEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationRatingECreateColumns
extends SituationRatingEId, SituationRatingEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QSituationRating extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	importanceRating: IQNumberField;
	urgencyRating: IQNumberField;

	// Non-Id Relations
	situation: QSituationQRelation;

}


// Entity Id Interface
export interface QSituationRatingQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSituationRatingQRelation
	extends QAirEntityQRelation<ISituationRating, QSituationRating>, QSituationRatingQId {
}

