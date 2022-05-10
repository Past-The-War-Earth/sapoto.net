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
	SituationThreadGraph,
	SituationThreadEId,
	SituationThreadEOptionalId,
	SituationThreadEUpdateProperties,
	SituationThreadESelect,
	QSituationThread,
	QSituationThreadQId,
	QSituationThreadQRelation,
} from './qsituationthread';
import {
	ISituationThread,
} from './situationthread';
import {
	IdeaSituationGraph,
	IdeaSituationEId,
	IdeaSituationEOptionalId,
	IdeaSituationEUpdateProperties,
	IdeaSituationESelect,
	QIdeaSituation,
	QIdeaSituationQId,
	QIdeaSituationQRelation,
	IIdeaSituation,
} from '@votecube/votecube';
import {
	ReplyRatingGraph,
	ReplyRatingEId,
	ReplyRatingEOptionalId,
	ReplyRatingEUpdateProperties,
	ReplyRatingESelect,
	QReplyRating,
	QReplyRatingQId,
	QReplyRatingQRelation,
} from './qreplyrating';
import {
	IReplyRating,
} from './replyrating';
import {
	ReplyTypeGraph,
	ReplyTypeEId,
	ReplyTypeEOptionalId,
	ReplyTypeEUpdateProperties,
	ReplyTypeESelect,
	QReplyType,
	QReplyTypeQId,
	QReplyTypeQRelation,
} from './qreplytype';
import {
	IReplyType,
} from './replytype';
import {
	IdeaUrgencyRatingGraph,
	IdeaUrgencyRatingEId,
	IdeaUrgencyRatingEOptionalId,
	IdeaUrgencyRatingEUpdateProperties,
	IdeaUrgencyRatingESelect,
	QIdeaUrgencyRating,
	QIdeaUrgencyRatingQId,
	QIdeaUrgencyRatingQRelation,
} from './qideaurgencyrating';
import {
	IIdeaUrgencyRating,
} from './ideaurgencyrating';
import {
	IReply,
} from './reply';


declare function require(moduleName: string): any;


//////////////////////////////
//  API SPECIFIC INTERFACES //
//////////////////////////////

/**
 * SELECT - All fields and relations (optional).
 */
export interface ReplyESelect
    extends RepositoryEntityESelect, ReplyEOptionalId {
	// Non-Id Properties

	// Id Relations - full property interfaces

  // Non-Id relations (including OneToMany's)
	situationThread?: SituationThreadESelect;
	parentReply?: ReplyESelect;
	childReplies?: ReplyESelect;
	ideaSituation?: IdeaSituationESelect;
	replyRatings?: ReplyRatingESelect;
	replyTypes?: ReplyTypeESelect;
	urgencyRatings?: IdeaUrgencyRatingESelect;

}

/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReplyEId
    extends RepositoryEntityEId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * Ids fields and relations only (optional).
 */
export interface ReplyEOptionalId {
	// Id Properties

	// Id Relations - Ids only

}

/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReplyEUpdateProperties
	extends RepositoryEntityEUpdateProperties {
	// Non-Id Properties

	// Non-Id Relations - ids only & no OneToMany's
	situationThread?: SituationThreadEOptionalId;
	parentReply?: ReplyEOptionalId;
	ideaSituation?: IdeaSituationEOptionalId;

}

/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReplyGraph
	extends ReplyEOptionalId, RepositoryEntityGraph {
// NOT USED: Cascading Relations
// NOT USED: ${relationsForCascadeGraph}
	// Non-Id Properties

	// Relations
	situationThread?: SituationThreadGraph;
	parentReply?: ReplyGraph;
	childReplies?: ReplyGraph[];
	ideaSituation?: IdeaSituationGraph;
	replyRatings?: ReplyRatingGraph[];
	replyTypes?: ReplyTypeGraph[];
	urgencyRatings?: IdeaUrgencyRatingGraph[];

}

/**
 * UPDATE - non-id columns (optional).
 */
export interface ReplyEUpdateColumns
	extends RepositoryEntityEUpdateColumns {
	// Non-Id Columns
	AGE_SUITABILITY?: number | IQNumberField;
	SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
	ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
	ORIGINAL_ACTOR_ID?: number | IQNumberField;
	SITUATION_THREADS_RID_1?: number | IQNumberField;
	SITUATION_THREADS_AID_1?: number | IQNumberField;
	SITUATION_THREADS_ARID_1?: number | IQNumberField;
	REPLIES_RID_1?: number | IQNumberField;
	REPLIES_AID_1?: number | IQNumberField;
	REPLIES_ARID_1?: number | IQNumberField;
	IDEA_SITUATIONS_RID_1?: number | IQNumberField;
	IDEA_SITUATIONS_AID_1?: number | IQNumberField;
	IDEA_SITUATIONS_ARID_1?: number | IQNumberField;

}

/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReplyECreateProperties
extends Partial<ReplyEId>, ReplyEUpdateProperties {
}

/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReplyECreateColumns
extends ReplyEId, ReplyEUpdateColumns {
}




///////////////////////////////////////////////
//  QUERY IMPLEMENTATION SPECIFIC INTERFACES //
///////////////////////////////////////////////

/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QReply extends QRepositoryEntity
{
	// Id Fields

	// Id Relations

	// Non-Id Fields

	// Non-Id Relations
	situationThread: QSituationThreadQRelation;
	parentReply: QReplyQRelation;
	childReplies: IQRepositoryEntityOneToManyRelation<IReply, QReply>;
	ideaSituation: QIdeaSituationQRelation;
	replyRatings: IQRepositoryEntityOneToManyRelation<IReplyRating, QReplyRating>;
	replyTypes: IQRepositoryEntityOneToManyRelation<IReplyType, QReplyType>;
	urgencyRatings: IQRepositoryEntityOneToManyRelation<IIdeaUrgencyRating, QIdeaUrgencyRating>;

}


// Entity Id Interface
export interface QReplyQId extends QRepositoryEntityQId
{
	
	// Id Fields

	// Id Relations


}

// Entity Relation Interface
export interface QReplyQRelation
	extends QRepositoryEntityQRelation<IReply, QReply>, QReplyQId {
}

