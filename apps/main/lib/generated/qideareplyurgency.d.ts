import { IQDateField, IQNumberField } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { ReplyGraph, ReplyEOptionalId, ReplyESelect, QReplyQRelation } from './qreply';
import { IIdeaReplyUrgency } from './ideareplyurgency';
/**
 * SELECT - All fields and relations (optional).
 */
export interface IdeaReplyUrgencyESelect extends AirEntityESelect, IdeaReplyUrgencyEOptionalId {
    urgency?: number | IQNumberField;
    reply?: ReplyESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface IdeaReplyUrgencyEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface IdeaReplyUrgencyEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface IdeaReplyUrgencyEUpdateProperties extends AirEntityEUpdateProperties {
    urgency?: number | IQNumberField;
    reply?: ReplyEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface IdeaReplyUrgencyGraph extends IdeaReplyUrgencyEOptionalId, AirEntityGraph {
    urgency?: number | IQNumberField;
    reply?: ReplyGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface IdeaReplyUrgencyEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    URGENCY?: number | IQNumberField;
    REPLIES_RID_1?: number | IQNumberField;
    REPLIES_AID_1?: number | IQNumberField;
    REPLIES_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface IdeaReplyUrgencyECreateProperties extends Partial<IdeaReplyUrgencyEId>, IdeaReplyUrgencyEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface IdeaReplyUrgencyECreateColumns extends IdeaReplyUrgencyEId, IdeaReplyUrgencyEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QIdeaReplyUrgency extends QAirEntity {
    urgency: IQNumberField;
    reply: QReplyQRelation;
}
export interface QIdeaReplyUrgencyQId extends QAirEntityQId {
}
export interface QIdeaReplyUrgencyQRelation extends QAirEntityQRelation<IIdeaReplyUrgency, QIdeaReplyUrgency>, QIdeaReplyUrgencyQId {
}
//# sourceMappingURL=qideareplyurgency.d.ts.map