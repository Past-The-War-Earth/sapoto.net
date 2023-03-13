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
	ThemeGraph,
	ThemeEId,
	ThemeEOptionalId,
	ThemeEUpdateProperties,
	ThemeESelect,
	QTheme,
	QThemeQId,
	QThemeQRelation,
} from './QTheme';
import {
	Theme,
} from '../../ddl/Theme';
import {
	SituationGraph,
	SituationEId,
	SituationEOptionalId,
	SituationEUpdateProperties,
	SituationESelect,
	QSituation,
	QSituationQId,
	QSituationQRelation,
} from './QSituation';
import {
	Situation,
} from '../../ddl/Situation';
import {
	Topic,
} from '../../ddl/Topic';


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface TopicESelect
    extends AirEntityESelect, TopicEOptionalId {
	// Non-Id Properties
	name?: string | IQStringField;
	imagePath?: string | IQStringField;

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	theme?: ThemeESelect;
	situations?: SituationESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface TopicEId
    extends AirEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface TopicEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface TopicEUpdateProperties
	extends AirEntityEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	imagePath?: string | IQStringField;

	// Non-Id Relations - _localIds only & no OneToMany's
	theme?: ThemeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TopicGraph
	extends TopicEOptionalId, AirEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties
	name?: string | IQStringField;
	imagePath?: string | IQStringField;

	// Relations
	theme?: ThemeGraph;
	situations?: SituationGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface TopicEUpdateColumns
	extends AirEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	CREATED_AT?: Date | IQDateField;
	SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
	NAME?: string | IQStringField;
	IMAGEPATH?: string | IQStringField;
	THEME_RID_1?: number | IQNumberField;
	THEME_AID_1?: number | IQNumberField;
	THEME_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface TopicECreateProperties
extends Partial<TopicEId>, TopicEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface TopicECreateColumns
extends TopicEId, TopicEUpdateColumns {
}


///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
export interface QTopic<IQE extends QTopic = any> extends QAirEntity<IQE | QTopic>
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	imagePath: IQStringField;

	// Non-Id Relations
	theme: QThemeQRelation;
	situations: IQAirEntityOneToManyRelation<Situation, QSituation>;

}

// Entity Id Interface
export interface QTopicQId extends QAirEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QTopicQRelation
	extends QAirEntityQRelation<Topic, QTopic>, QTopicQId {
}