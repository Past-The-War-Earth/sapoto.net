import { IQNumberField } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { SituationGraph, SituationEOptionalId, SituationESelect, QSituationQRelation } from './qsituation';
import { ISituationRating } from './situationrating';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationRatingESelect extends RepositoryEntityESelect, SituationRatingEOptionalId {
    importanceRating?: number | IQNumberField;
    urgencyRating?: number | IQNumberField;
    situation?: SituationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationRatingEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationRatingEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationRatingEUpdateProperties extends RepositoryEntityEUpdateProperties {
    importanceRating?: number | IQNumberField;
    urgencyRating?: number | IQNumberField;
    situation?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationRatingGraph extends SituationRatingEOptionalId, RepositoryEntityGraph {
    importanceRating?: number | IQNumberField;
    urgencyRating?: number | IQNumberField;
    situation?: SituationGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationRatingEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
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
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituationRating extends QRepositoryEntity {
    importanceRating: IQNumberField;
    urgencyRating: IQNumberField;
    situation: QSituationQRelation;
}
export interface QSituationRatingQId extends QRepositoryEntityQId {
}
export interface QSituationRatingQRelation extends QRepositoryEntityQRelation<ISituationRating, QSituationRating>, QSituationRatingQId {
}
//# sourceMappingURL=qsituationrating.d.ts.map