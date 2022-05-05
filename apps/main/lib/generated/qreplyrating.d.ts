import { IQNumberField } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { ReplyGraph, ReplyEOptionalId, ReplyESelect, QReplyQRelation } from './qreply';
import { IReplyRating } from './replyrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ReplyRatingESelect extends RepositoryEntityESelect, ReplyRatingEOptionalId {
    rating?: number | IQNumberField;
    urgency?: number | IQNumberField;
    reply?: ReplyESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReplyRatingEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ReplyRatingEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReplyRatingEUpdateProperties extends RepositoryEntityEUpdateProperties {
    rating?: number | IQNumberField;
    urgency?: number | IQNumberField;
    reply?: ReplyEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReplyRatingGraph extends ReplyRatingEOptionalId, RepositoryEntityGraph {
    rating?: number | IQNumberField;
    urgency?: number | IQNumberField;
    reply?: ReplyGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ReplyRatingEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    RATING?: number | IQNumberField;
    URGENCY?: number | IQNumberField;
    REPLIES_RID_1?: number | IQNumberField;
    REPLIES_AID_1?: number | IQNumberField;
    REPLIES_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReplyRatingECreateProperties extends Partial<ReplyRatingEId>, ReplyRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReplyRatingECreateColumns extends ReplyRatingEId, ReplyRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QReplyRating extends QRepositoryEntity {
    rating: IQNumberField;
    urgency: IQNumberField;
    reply: QReplyQRelation;
}
export interface QReplyRatingQId extends QRepositoryEntityQId {
}
export interface QReplyRatingQRelation extends QRepositoryEntityQRelation<IReplyRating, QReplyRating>, QReplyRatingQId {
}
//# sourceMappingURL=qreplyrating.d.ts.map