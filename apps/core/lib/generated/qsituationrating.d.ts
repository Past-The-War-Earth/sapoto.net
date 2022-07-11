import { IQDateField, IQNumberField } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { SituationGraph, SituationEOptionalId, SituationESelect, QSituationQRelation } from './qsituation';
import { ISituationRating } from './situationrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationRatingESelect extends AirEntityESelect, SituationRatingEOptionalId {
    importanceRating?: number | IQNumberField;
    urgencyRating?: number | IQNumberField;
    situation?: SituationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationRatingEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationRatingEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationRatingEUpdateProperties extends AirEntityEUpdateProperties {
    importanceRating?: number | IQNumberField;
    urgencyRating?: number | IQNumberField;
    situation?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationRatingGraph extends SituationRatingEOptionalId, AirEntityGraph {
    importanceRating?: number | IQNumberField;
    urgencyRating?: number | IQNumberField;
    situation?: SituationGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationRatingEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    IMPORTANCE_RATING?: number | IQNumberField;
    URGENCY_RATING?: number | IQNumberField;
    SITUATIONS_RID_1?: number | IQNumberField;
    SITUATIONS_AID_1?: number | IQNumberField;
    SITUATIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationRatingECreateProperties extends Partial<SituationRatingEId>, SituationRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationRatingECreateColumns extends SituationRatingEId, SituationRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QSituationRating extends QAirEntity {
    importanceRating: IQNumberField;
    urgencyRating: IQNumberField;
    situation: QSituationQRelation;
}
export interface QSituationRatingQId extends QAirEntityQId {
}
export interface QSituationRatingQRelation extends QAirEntityQRelation<ISituationRating, QSituationRating>, QSituationRatingQId {
}
//# sourceMappingURL=qsituationrating.d.ts.map