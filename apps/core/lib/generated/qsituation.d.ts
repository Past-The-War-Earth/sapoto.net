import { IQDateField, IQNumberField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { TopicGraph, TopicEOptionalId, TopicESelect, QTopicQRelation } from './qtopic';
import { SituationRatingGraph, SituationRatingESelect, QSituationRating } from './qsituationrating';
import { ISituationRating } from './situationrating';
import { ISituation } from './situation';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationESelect extends AirEntityESelect, SituationEOptionalId {
    text?: string | IQStringField;
    topic?: TopicESelect;
    ratings?: SituationRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationEUpdateProperties extends AirEntityEUpdateProperties {
    text?: string | IQStringField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationGraph extends SituationEOptionalId, AirEntityGraph {
    text?: string | IQStringField;
    topic?: TopicGraph;
    ratings?: SituationRatingGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    TEXT?: string | IQStringField;
    TOPIC_RID_1?: number | IQNumberField;
    TOPIC_AID_1?: number | IQNumberField;
    TOPIC_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationECreateProperties extends Partial<SituationEId>, SituationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationECreateColumns extends SituationEId, SituationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituation extends QAirEntity {
    text: IQStringField;
    topic: QTopicQRelation;
    ratings: IQAirEntityOneToManyRelation<ISituationRating, QSituationRating>;
}
export interface QSituationQId extends QAirEntityQId {
}
export interface QSituationQRelation extends QAirEntityQRelation<ISituation, QSituation>, QSituationQId {
}
//# sourceMappingURL=qsituation.d.ts.map