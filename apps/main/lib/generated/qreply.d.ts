import { IQDateField, IQNumberField, IQStringField, IQRepositoryEntityOneToManyRelation } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { SituationThreadGraph, SituationThreadEOptionalId, SituationThreadESelect, QSituationThreadQRelation } from './qsituationthread';
import { SituationIdeaGraph, SituationIdeaEOptionalId, SituationIdeaESelect, QSituationIdeaQRelation } from '@votecube/votecube';
import { ReplyRatingGraph, ReplyRatingESelect, QReplyRating } from './qreplyrating';
import { IReplyRating } from './replyrating';
import { ReplyTypeGraph, ReplyTypeESelect, QReplyType } from './qreplytype';
import { IReplyType } from './replytype';
import { IdeaUrgencyRatingGraph, IdeaUrgencyRatingESelect, QIdeaUrgencyRating } from './qideaurgencyrating';
import { IIdeaUrgencyRating } from './ideaurgencyrating';
import { IReply } from './reply';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ReplyESelect extends RepositoryEntityESelect, ReplyEOptionalId {
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
    urgencyRatings?: IdeaUrgencyRatingESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ReplyEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ReplyEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ReplyEUpdateProperties extends RepositoryEntityEUpdateProperties {
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
export interface ReplyGraph extends ReplyEOptionalId, RepositoryEntityGraph {
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
    urgencyRatings?: IdeaUrgencyRatingGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ReplyEUpdateColumns extends RepositoryEntityEUpdateColumns {
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
export interface QReply extends QRepositoryEntity {
    text: IQStringField;
    numberOfDownRatings: IQNumberField;
    numberOfUpRatings: IQNumberField;
    urgencyTotal: IQNumberField;
    numberOfUrgencyRatings: IQNumberField;
    situationThread: QSituationThreadQRelation;
    parentReply: QReplyQRelation;
    situationIdea: QSituationIdeaQRelation;
    childReplies: IQRepositoryEntityOneToManyRelation<IReply, QReply>;
    replyRatings: IQRepositoryEntityOneToManyRelation<IReplyRating, QReplyRating>;
    replyTypes: IQRepositoryEntityOneToManyRelation<IReplyType, QReplyType>;
    urgencyRatings: IQRepositoryEntityOneToManyRelation<IIdeaUrgencyRating, QIdeaUrgencyRating>;
}
export interface QReplyQId extends QRepositoryEntityQId {
}
export interface QReplyQRelation extends QRepositoryEntityQRelation<IReply, QReply>, QReplyQId {
}
//# sourceMappingURL=qreply.d.ts.map