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
	ThemeGraph,
	ThemeEId,
	ThemeEOptionalId,
	ThemeEUpdateProperties,
	ThemeESelect,
	QTheme,
	QThemeQId,
	QThemeQRelation,
} from './qtheme';
import {
	ITheme,
} from './theme';
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
	ITopic,
} from './topic';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface TopicESelect
    extends RepositoryEntityESelect, TopicEOptionalId {
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
    extends RepositoryEntityEId {
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
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties
	name?: string | IQStringField;
	imagePath?: string | IQStringField;

	// Non-Id Relations - ids only & no OneToMany's
	theme?: ThemeEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface TopicGraph
	extends TopicEOptionalId, RepositoryEntityGraph {
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
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
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
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QTopic extends QRepositoryEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields
	name: IQStringField;
	imagePath: IQStringField;

	// Non-Id Relations
	theme: QThemeQRelation;
	situations: IQRepositoryEntityOneToManyRelation<ISituation, QSituation>;

}


// Entity Id Interface
export interface QTopicQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QTopicQRelation
	extends QRepositoryEntityQRelation<ITopic, QTopic>, QTopicQId {
}

