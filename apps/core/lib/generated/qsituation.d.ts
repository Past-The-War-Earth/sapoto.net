import { IQDateField, IQNumberField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
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
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    importanceTotal?: number | IQNumberField;
    numberOfImportanceRatings?: number | IQNumberField;
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
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    importanceTotal?: number | IQNumberField;
    numberOfImportanceRatings?: number | IQNumberField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationGraph extends SituationEOptionalId, AirEntityGraph {
    text?: string | IQStringField;
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    importanceTotal?: number | IQNumberField;
    numberOfImportanceRatings?: number | IQNumberField;
    topic?: TopicGraph;
    ratings?: SituationRatingGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    TEXT?: string | IQStringField;
    URGENCY_TOTAL?: number | IQNumberField;
    NUMBER_OF_URGENCY_RATINGS?: number | IQNumberField;
    IMPORTANCE_TOTAL?: number | IQNumberField;
    NUMBER_OF_IMPORTANCE_RATINGS?: number | IQNumberField;
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
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QSituation extends QAirEntity {
    text: IQStringField;
    urgencyTotal: IQNumberField;
    numberOfUrgencyRatings: IQNumberField;
    importanceTotal: IQNumberField;
    numberOfImportanceRatings: IQNumberField;
    topic: QTopicQRelation;
    ratings: IQAirEntityOneToManyRelation<ISituationRating, QSituationRating>;
}
export interface QSituationQId extends QAirEntityQId {
}
export interface QSituationQRelation extends QAirEntityQRelation<ISituation, QSituation>, QSituationQId {
}
//# sourceMappingURL=qsituation.d.ts.map