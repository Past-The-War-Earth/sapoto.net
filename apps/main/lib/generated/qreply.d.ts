import { IQNumberField, IQRepositoryEntityOneToManyRelation } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { SituationThreadGraph, SituationThreadEOptionalId, SituationThreadESelect, QSituationThreadQRelation } from './qsituationthread';
import { IdeaSituationGraph, IdeaSituationEOptionalId, IdeaSituationESelect, QIdeaSituationQRelation } from '@votecube/votecube/lib/app';
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
    situationThread?: SituationThreadESelect;
    parentReply?: ReplyESelect;
    childReplies?: ReplyESelect;
    ideaSituation?: IdeaSituationESelect;
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
    situationThread?: SituationThreadEOptionalId;
    parentReply?: ReplyEOptionalId;
    ideaSituation?: IdeaSituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ReplyGraph extends ReplyEOptionalId, RepositoryEntityGraph {
    situationThread?: SituationThreadGraph;
    parentReply?: ReplyGraph;
    childReplies?: ReplyGraph[];
    ideaSituation?: IdeaSituationGraph;
    replyRatings?: ReplyRatingGraph[];
    replyTypes?: ReplyTypeGraph[];
    urgencyRatings?: IdeaUrgencyRatingGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ReplyEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    SITUATION_THREADS_RID_1?: number | IQNumberField;
    SITUATION_THREADS_AID_1?: number | IQNumberField;
    SITUATION_THREADS_ARID_1?: number | IQNumberField;
    REPLIES_RID_1?: number | IQNumberField;
    REPLIES_AID_1?: number | IQNumberField;
    REPLIES_ARID_1?: number | IQNumberField;
    IDEA_SITUATIONS_RID_1?: number | IQNumberField;
    IDEA_SITUATIONS_AID_1?: number | IQNumberField;
    IDEA_SITUATIONS_ARID_1?: number | IQNumberField;
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
    situationThread: QSituationThreadQRelation;
    parentReply: QReplyQRelation;
    childReplies: IQRepositoryEntityOneToManyRelation<IReply, QReply>;
    ideaSituation: QIdeaSituationQRelation;
    replyRatings: IQRepositoryEntityOneToManyRelation<IReplyRating, QReplyRating>;
    replyTypes: IQRepositoryEntityOneToManyRelation<IReplyType, QReplyType>;
    urgencyRatings: IQRepositoryEntityOneToManyRelation<IIdeaUrgencyRating, QIdeaUrgencyRating>;
}
export interface QReplyQId extends QRepositoryEntityQId {
}
export interface QReplyQRelation extends QRepositoryEntityQRelation<IReply, QReply>, QReplyQId {
}
//# sourceMappingURL=qreply.d.ts.map