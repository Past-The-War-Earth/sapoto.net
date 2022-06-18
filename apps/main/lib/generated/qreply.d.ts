import { IQDateField, IQNumberField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { SituationThreadGraph, SituationThreadEOptionalId, SituationThreadESelect, QSituationThreadQRelation } from './qsituationthread';
import { SituationIdeaGraph, SituationIdeaEOptionalId, SituationIdeaESelect, QSituationIdeaQRelation } from '@votecube/votecube';
import { ReplyRatingGraph, ReplyRatingESelect, QReplyRating } from './qreplyrating';
import { IReplyRating } from './replyrating';
import { ReplyTypeGraph, ReplyTypeESelect, QReplyType } from './qreplytype';
import { IReplyType } from './replytype';
import { IdeaReplyUrgencyGraph, IdeaReplyUrgencyESelect, QIdeaReplyUrgency } from './qideareplyurgency';
import { IIdeaReplyUrgency } from './ideareplyurgency';
import { IReply } from './reply';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ReplyESelect extends AirEntityESelect, ReplyEOptionalId {
    text?: string | IQStringField;
    numberOfDownRatings?: number | IQNumberField;
    numberOfUpRatings?: number | IQNumberField;
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    situationThread?: SituationThreadESelect;
    parentReply?: ReplyESelect;
    situationIdea?: SituationIdeaESelect;
    childReplies?: ReplyESelect;
    replyRatings?: ReplyRatingESelect;
    replyTypes?: ReplyTypeESelect;
    ideaReplyUrgencies?: IdeaReplyUrgencyESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReplyEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ReplyEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReplyEUpdateProperties extends AirEntityEUpdateProperties {
    text?: string | IQStringField;
    numberOfDownRatings?: number | IQNumberField;
    numberOfUpRatings?: number | IQNumberField;
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    situationThread?: SituationThreadEOptionalId;
    parentReply?: ReplyEOptionalId;
    situationIdea?: SituationIdeaEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReplyGraph extends ReplyEOptionalId, AirEntityGraph {
    text?: string | IQStringField;
    numberOfDownRatings?: number | IQNumberField;
    numberOfUpRatings?: number | IQNumberField;
    urgencyTotal?: number | IQNumberField;
    numberOfUrgencyRatings?: number | IQNumberField;
    situationThread?: SituationThreadGraph;
    parentReply?: ReplyGraph;
    situationIdea?: SituationIdeaGraph;
    childReplies?: ReplyGraph[];
    replyRatings?: ReplyRatingGraph[];
    replyTypes?: ReplyTypeGraph[];
    ideaReplyUrgencies?: IdeaReplyUrgencyGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ReplyEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    TEXT?: string | IQStringField;
    NUMBER_OF_DOWN_RATINGS?: number | IQNumberField;
    NUMBER_OF_UP_RATINGS?: number | IQNumberField;
    URGENCY_TOTAL?: number | IQNumberField;
    NUMBER_OF_URGENCY_RATINGS?: number | IQNumberField;
    SITUATION_THREADS_RID_1?: number | IQNumberField;
    SITUATION_THREADS_AID_1?: number | IQNumberField;
    SITUATION_THREADS_ARID_1?: number | IQNumberField;
    REPLIES_RID_1?: number | IQNumberField;
    REPLIES_AID_1?: number | IQNumberField;
    REPLIES_ARID_1?: number | IQNumberField;
    SITUATION_IDEAS_RID_1?: number | IQNumberField;
    SITUATION_IDEAS_AID_1?: number | IQNumberField;
    SITUATION_IDEAS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ReplyECreateProperties extends Partial<ReplyEId>, ReplyEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ReplyECreateColumns extends ReplyEId, ReplyEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QReply extends QAirEntity {
    text: IQStringField;
    numberOfDownRatings: IQNumberField;
    numberOfUpRatings: IQNumberField;
    urgencyTotal: IQNumberField;
    numberOfUrgencyRatings: IQNumberField;
    situationThread: QSituationThreadQRelation;
    parentReply: QReplyQRelation;
    situationIdea: QSituationIdeaQRelation;
    childReplies: IQAirEntityOneToManyRelation<IReply, QReply>;
    replyRatings: IQAirEntityOneToManyRelation<IReplyRating, QReplyRating>;
    replyTypes: IQAirEntityOneToManyRelation<IReplyType, QReplyType>;
    ideaReplyUrgencies: IQAirEntityOneToManyRelation<IIdeaReplyUrgency, QIdeaReplyUrgency>;
}
export interface QReplyQId extends QAirEntityQId {
}
export interface QReplyQRelation extends QAirEntityQRelation<IReply, QReply>, QReplyQId {
}
//# sourceMappingURL=qreply.d.ts.map