import { IQDateField, IQNumberField, IQStringField } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { ReplyGraph, ReplyEOptionalId, ReplyESelect, QReplyQRelation } from './qreply';
import { IReplyType } from './replytype';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ReplyTypeESelect extends AirEntityESelect, ReplyTypeEOptionalId {
    type?: string | IQStringField;
    reply?: ReplyESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReplyTypeEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ReplyTypeEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReplyTypeEUpdateProperties extends AirEntityEUpdateProperties {
    type?: string | IQStringField;
    reply?: ReplyEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReplyTypeGraph extends ReplyTypeEOptionalId, AirEntityGraph {
    type?: string | IQStringField;
    reply?: ReplyGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ReplyTypeEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    TYPE?: string | IQStringField;
    REPLIES_RID_1?: number | IQNumberField;
    REPLIES_AID_1?: number | IQNumberField;
    REPLIES_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReplyTypeECreateProperties extends Partial<ReplyTypeEId>, ReplyTypeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReplyTypeECreateColumns extends ReplyTypeEId, ReplyTypeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QReplyType extends QAirEntity {
    type: IQStringField;
    reply: QReplyQRelation;
}
export interface QReplyTypeQId extends QAirEntityQId {
}
export interface QReplyTypeQRelation extends QAirEntityQRelation<IReplyType, QReplyType>, QReplyTypeQId {
}
//# sourceMappingURL=qreplytype.d.ts.map