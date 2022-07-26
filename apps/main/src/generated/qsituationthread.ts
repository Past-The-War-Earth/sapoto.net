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
	ISituation,
} from '@sapoto/core';
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
	ISituationThread,
} from './situationthread';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationThreadESelect
    extends AirEntityESelect, SituationThreadEOptionalId {
	// Non-Id Properties
	numberOfExperiences?: number | IQNumberField;
	numberOfIdeas?: number | IQNumberField;
	numberOfQuestions?: number | IQNumberField;
	numberOfReplies?: number | IQNumberField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situation?: SituationESelect;
	replies?: ReplyESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationThreadEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface SituationThreadEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationThreadEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	numberOfExperiences?: number | IQNumberField;
	numberOfIdeas?: number | IQNumberField;
	numberOfQuestions?: number | IQNumberField;
	numberOfReplies?: number | IQNumberField;

	// Non-Id Relations - _localIds only & no OneToMany's
	situation?: SituationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationThreadGraph
	extends SituationThreadEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	numberOfExperiences?: number | IQNumberField;
	numberOfIdeas?: number | IQNumberField;
	numberOfQuestions?: number | IQNumberField;
	numberOfReplies?: number | IQNumberField;

	// Relations
	situation?: SituationGraph;
	replies?: ReplyGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationThreadEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
	ORIGINAL_ACTOR_LID?: number | IQNumberField;
	NUMBER_OF_EXPERIENCES?: number | IQNumberField;
	NUMBER_OF_IDEAS?: number | IQNumberField;
	NUMBER_OF_QUESTIONS?: number | IQNumberField;
	NUMBER_OF_REPLIES?: number | IQNumberField;
	SITUATIONS_RID_1?: number | IQNumberField;
	SITUATIONS_AID_1?: number | IQNumberField;
	SITUATIONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationThreadECreateProperties
extends Partial<SituationThreadEId>, SituationThreadEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationThreadECreateColumns
extends SituationThreadEId, SituationThreadEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QSituationThread extends QAirEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	numberOfExperiences: IQNumberField;
	numberOfIdeas: IQNumberField;
	numberOfQuestions: IQNumberField;
	numberOfReplies: IQNumberField;

	// Non-Id Relations
	situation: QSituationQRelation;
	replies: IQAirEntityOneToManyRelation<IReply, QReply>;

}

// Entity Id Interface
export interface QSituationThreadQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QSituationThreadQRelation
	extends QAirEntityQRelation<ISituationThread, QSituationThread>, QSituationThreadQId {
}