import { IQDateField, IQNumberField, IQStringField, IQRepositoryEntityOneToManyRelation } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { ICounts } from '../ddl/icounts';
import { SituationGraph, SituationEOptionalId, SituationESelect, QSituationQRelation } from '@sapoto/core';
import { ReplyGraph, ReplyESelect, QReply } from './qreply';
import { IReply } from './reply';
import { ISituationThread } from './situationthread';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationThreadESelect extends RepositoryEntityESelect, SituationThreadEOptionalId {
    counts?: ICounts | IQStringField;
    situation?: SituationESelect;
    replies?: ReplyESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationThreadEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationThreadEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationThreadEUpdateProperties extends RepositoryEntityEUpdateProperties {
    counts?: ICounts | IQStringField;
    situation?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationThreadGraph extends SituationThreadEOptionalId, RepositoryEntityGraph {
    counts?: ICounts | IQStringField;
    situation?: SituationGraph;
    replies?: ReplyGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationThreadEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    COUNTS?: string | IQStringField;
    SITUATIONS_RID_1?: number | IQNumberField;
    SITUATIONS_AID_1?: number | IQNumberField;
    SITUATIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface SituationThreadECreateProperties extends Partial<SituationThreadEId>, SituationThreadEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface SituationThreadECreateColumns extends SituationThreadEId, SituationThreadEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QSituationThread extends QRepositoryEntity {
    counts: IQStringField;
    situation: QSituationQRelation;
    replies: IQRepositoryEntityOneToManyRelation<IReply, QReply>;
}
export interface QSituationThreadQId extends QRepositoryEntityQId {
}
export interface QSituationThreadQRelation extends QRepositoryEntityQRelation<ISituationThread, QSituationThread>, QSituationThreadQId {
}
//# sourceMappingURL=qsituationthread.d.ts.map