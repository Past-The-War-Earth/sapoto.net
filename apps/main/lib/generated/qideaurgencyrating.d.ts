import { IQDateField, IQNumberField } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { ReplyGraph, ReplyEOptionalId, ReplyESelect, QReplyQRelation } from './qreply';
import { IIdeaUrgencyRating } from './ideaurgencyrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaUrgencyRatingESelect extends RepositoryEntityESelect, IdeaUrgencyRatingEOptionalId {
    rating?: number | IQNumberField;
    reply?: ReplyESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaUrgencyRatingEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaUrgencyRatingEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaUrgencyRatingEUpdateProperties extends RepositoryEntityEUpdateProperties {
    rating?: number | IQNumberField;
    reply?: ReplyEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaUrgencyRatingGraph extends IdeaUrgencyRatingEOptionalId, RepositoryEntityGraph {
    rating?: number | IQNumberField;
    reply?: ReplyGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaUrgencyRatingEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    RATING?: number | IQNumberField;
    REPLIES_RID_1?: number | IQNumberField;
    REPLIES_AID_1?: number | IQNumberField;
    REPLIES_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaUrgencyRatingECreateProperties extends Partial<IdeaUrgencyRatingEId>, IdeaUrgencyRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaUrgencyRatingECreateColumns extends IdeaUrgencyRatingEId, IdeaUrgencyRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdeaUrgencyRating extends QRepositoryEntity {
    rating: IQNumberField;
    reply: QReplyQRelation;
}
export interface QIdeaUrgencyRatingQId extends QRepositoryEntityQId {
}
export interface QIdeaUrgencyRatingQRelation extends QRepositoryEntityQRelation<IIdeaUrgencyRating, QIdeaUrgencyRating>, QIdeaUrgencyRatingQId {
}
//# sourceMappingURL=qideaurgencyrating.d.ts.map