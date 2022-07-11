import { IQDateField, IQNumberField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { SituationGraph, SituationEOptionalId, SituationESelect, QSituationQRelation } from '@sapoto/core';
import { ReplyGraph, ReplyESelect, QReply } from './qreply';
import { IReply } from './reply';
import { ISituationThread } from './situationthread';
/**
 * SELECT - All fields and relations (optional).
 */
export interface SituationThreadESelect extends AirEntityESelect, SituationThreadEOptionalId {
    numberOfExperiences?: number | IQNumberField;
    numberOfIdeas?: number | IQNumberField;
    numberOfQuestions?: number | IQNumberField;
    numberOfReplies?: number | IQNumberField;
    situation?: SituationESelect;
    replies?: ReplyESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface SituationThreadEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface SituationThreadEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface SituationThreadEUpdateProperties extends AirEntityEUpdateProperties {
    numberOfExperiences?: number | IQNumberField;
    numberOfIdeas?: number | IQNumberField;
    numberOfQuestions?: number | IQNumberField;
    numberOfReplies?: number | IQNumberField;
    situation?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface SituationThreadGraph extends SituationThreadEOptionalId, AirEntityGraph {
    numberOfExperiences?: number | IQNumberField;
    numberOfIdeas?: number | IQNumberField;
    numberOfQuestions?: number | IQNumberField;
    numberOfReplies?: number | IQNumberField;
    situation?: SituationGraph;
    replies?: ReplyGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface SituationThreadEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    NUMBER_OF_EXPERIENCES?: number | IQNumberField;
    NUMBER_OF_IDEAS?: number | IQNumberField;
    NUMBER_OF_QUESTIONS?: number | IQNumberField;
    NUMBER_OF_REPLIES?: number | IQNumberField;
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
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QSituationThread extends QAirEntity {
    numberOfExperiences: IQNumberField;
    numberOfIdeas: IQNumberField;
    numberOfQuestions: IQNumberField;
    numberOfReplies: IQNumberField;
    situation: QSituationQRelation;
    replies: IQAirEntityOneToManyRelation<IReply, QReply>;
}
export interface QSituationThreadQId extends QAirEntityQId {
}
export interface QSituationThreadQRelation extends QAirEntityQRelation<ISituationThread, QSituationThread>, QSituationThreadQId {
}
//# sourceMappingURL=qsituationthread.d.ts.map