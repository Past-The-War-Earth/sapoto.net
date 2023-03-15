import { AirRequest, RequestManager } from '@airport/web-tower';
import { SituationIdea, SituationIdeaESelect, SituationIdeaEOptionalId, SituationIdeaGraph, QSituationIdeaQRelation, SituationIdeaVDescriptor, SituationIdeaApi } from '@votecube/votecube';
import { AirEntity, AirEntityESelect, AirEntityEId, AirEntityEUpdateProperties, AirEntityGraph, AirEntityEUpdateColumns, QAirEntity, QAirEntityQId, QAirEntityQRelation, AirEntityVDescriptor } from '@airport/final-approach';
import { Situation, SituationESelect, SituationEOptionalId, SituationGraph, QSituationQRelation, Topic, SituationVDescriptor, SituationApi, SituationRating } from '@sapoto/core';
import { UserAccount, UserAccountESelect, UserAccountEOptionalId, UserAccountGraph, QUserAccountQRelation, UserAccountVDescriptor } from '@airport/travel-document-checkpoint';
import { IQNumberField, IQDateField, IQAirEntityOneToManyRelation, IQStringField, IQBooleanField, IEntitySelectProperties, IEntityCreateProperties, IEntityUpdateColumns, IEntityUpdateProperties, IEntityIdProperties, IEntityCascadeGraph, IQEntity } from '@airport/tarmaq-query';
import { DbEntity_LocalId, DbApplication } from '@airport/ground-control';
import { ObservableDao, IObservableDao, DaoQueryDecorators } from '@airport/tarmaq-dao';
import { IVNumberField, IVStringField, IVBooleanField, Dvo, IDvo } from '@airbridge/validate';
import { QAppInternal } from '@airport/air-traffic-control';
import { AbstractApplicationLoader } from '@airport/terminal-map';

type QuestionType_Type = 'What' | 'Which' | 'Who' | 'Where' | 'Why' | 'When' | 'How' | 'Whose';
declare class QuestionType extends AirEntity {
    type: QuestionType_Type;
    replyQuestionTypes: ReplyQuestionType[];
}

declare class ReplyQuestionType extends AirEntity {
    reply: Reply;
    questionType: QuestionType;
}

declare class ReplyRating extends AirEntity {
    reply: Reply;
    upOrDownRating: 1 | 0 | -1;
}

declare class SituationThread extends AirEntity {
    numberOfExperiences: number;
    numberOfIdeas: number;
    numberOfQuestions: number;
    numberOfReplies: number;
    situation: Situation;
    replies: Reply[];
}

type UserRating_Ranking = number;
declare class UserRating extends AirEntity {
    ranking: UserRating_Ranking;
    userAccount: UserAccount;
    replies: Reply[];
}

type Reply_Type = 'comment' | 'experience' | 'idea' | 'question';
declare class Reply extends AirEntity {
    text: string;
    isIdea: boolean;
    isExperience: boolean;
    isQuestion: boolean;
    numberOfDownRatings: number;
    numberOfUpRatings: number;
    numberRatings: number;
    situationThread: SituationThread;
    parentReply?: Reply;
    situationIdea?: SituationIdea;
    userRating: UserRating;
    childReplies?: Reply[];
    replyRatings?: ReplyRating[];
    replyQuestionTypes: ReplyQuestionType[];
    userReplyRating?: ReplyRating;
}

/**
 * SELECT - All fields and relations (optional).
 */
interface SituationThreadESelect extends AirEntityESelect, SituationThreadEOptionalId {
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
interface SituationThreadEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface SituationThreadEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface SituationThreadEUpdateProperties extends AirEntityEUpdateProperties {
    numberOfExperiences?: number | IQNumberField;
    numberOfIdeas?: number | IQNumberField;
    numberOfQuestions?: number | IQNumberField;
    numberOfReplies?: number | IQNumberField;
    situation?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface SituationThreadGraph extends SituationThreadEOptionalId, AirEntityGraph {
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
interface SituationThreadEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
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
interface SituationThreadECreateProperties extends Partial<SituationThreadEId>, SituationThreadEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface SituationThreadECreateColumns extends SituationThreadEId, SituationThreadEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QSituationThread<IQE extends QSituationThread = any> extends QAirEntity<IQE | QSituationThread> {
    numberOfExperiences: IQNumberField;
    numberOfIdeas: IQNumberField;
    numberOfQuestions: IQNumberField;
    numberOfReplies: IQNumberField;
    situation: QSituationQRelation;
    replies: IQAirEntityOneToManyRelation<Reply, QReply>;
}
interface QSituationThreadQId extends QAirEntityQId {
}
interface QSituationThreadQRelation extends QAirEntityQRelation<SituationThread, QSituationThread>, QSituationThreadQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface UserRatingESelect extends AirEntityESelect, UserRatingEOptionalId {
    ranking?: number | IQNumberField;
    userAccount?: UserAccountESelect;
    replies?: ReplyESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface UserRatingEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface UserRatingEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface UserRatingEUpdateProperties extends AirEntityEUpdateProperties {
    ranking?: number | IQNumberField;
    userAccount?: UserAccountEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface UserRatingGraph extends UserRatingEOptionalId, AirEntityGraph {
    ranking?: number | IQNumberField;
    userAccount?: UserAccountGraph;
    replies?: ReplyGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
interface UserRatingEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    RANKING?: number | IQNumberField;
    USER_ACCOUNT_LID?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface UserRatingECreateProperties extends Partial<UserRatingEId>, UserRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface UserRatingECreateColumns extends UserRatingEId, UserRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QUserRating<IQE extends QUserRating = any> extends QAirEntity<IQE | QUserRating> {
    ranking: IQNumberField;
    userAccount: QUserAccountQRelation;
    replies: IQAirEntityOneToManyRelation<Reply, QReply>;
}
interface QUserRatingQId extends QAirEntityQId {
}
interface QUserRatingQRelation extends QAirEntityQRelation<UserRating, QUserRating>, QUserRatingQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface ReplyRatingESelect extends AirEntityESelect, ReplyRatingEOptionalId {
    upOrDownRating?: number | IQNumberField;
    reply?: ReplyESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface ReplyRatingEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface ReplyRatingEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface ReplyRatingEUpdateProperties extends AirEntityEUpdateProperties {
    upOrDownRating?: number | IQNumberField;
    reply?: ReplyEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface ReplyRatingGraph extends ReplyRatingEOptionalId, AirEntityGraph {
    upOrDownRating?: number | IQNumberField;
    reply?: ReplyGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface ReplyRatingEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    UP_OR_DOWN_RATING?: number | IQNumberField;
    REPLIES_RID_1?: number | IQNumberField;
    REPLIES_AID_1?: number | IQNumberField;
    REPLIES_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface ReplyRatingECreateProperties extends Partial<ReplyRatingEId>, ReplyRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface ReplyRatingECreateColumns extends ReplyRatingEId, ReplyRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QReplyRating<IQE extends QReplyRating = any> extends QAirEntity<IQE | QReplyRating> {
    upOrDownRating: IQNumberField;
    reply: QReplyQRelation;
}
interface QReplyRatingQId extends QAirEntityQId {
}
interface QReplyRatingQRelation extends QAirEntityQRelation<ReplyRating, QReplyRating>, QReplyRatingQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface ReplyESelect extends AirEntityESelect, ReplyEOptionalId {
    text?: string | IQStringField;
    isIdea?: boolean | IQBooleanField;
    isExperience?: boolean | IQBooleanField;
    isQuestion?: boolean | IQBooleanField;
    numberOfDownRatings?: number | IQNumberField;
    numberOfUpRatings?: number | IQNumberField;
    numberRatings?: number | IQNumberField;
    situationThread?: SituationThreadESelect;
    parentReply?: ReplyESelect;
    situationIdea?: SituationIdeaESelect;
    userRating?: UserRatingESelect;
    childReplies?: ReplyESelect;
    replyRatings?: ReplyRatingESelect;
    replyQuestionTypes?: ReplyQuestionTypeESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface ReplyEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface ReplyEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface ReplyEUpdateProperties extends AirEntityEUpdateProperties {
    text?: string | IQStringField;
    isIdea?: boolean | IQBooleanField;
    isExperience?: boolean | IQBooleanField;
    isQuestion?: boolean | IQBooleanField;
    numberOfDownRatings?: number | IQNumberField;
    numberOfUpRatings?: number | IQNumberField;
    numberRatings?: number | IQNumberField;
    situationThread?: SituationThreadEOptionalId;
    parentReply?: ReplyEOptionalId;
    situationIdea?: SituationIdeaEOptionalId;
    userRating?: UserRatingEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface ReplyGraph extends ReplyEOptionalId, AirEntityGraph {
    text?: string | IQStringField;
    isIdea?: boolean | IQBooleanField;
    isExperience?: boolean | IQBooleanField;
    isQuestion?: boolean | IQBooleanField;
    numberOfDownRatings?: number | IQNumberField;
    numberOfUpRatings?: number | IQNumberField;
    numberRatings?: number | IQNumberField;
    situationThread?: SituationThreadGraph;
    parentReply?: ReplyGraph;
    situationIdea?: SituationIdeaGraph;
    userRating?: UserRatingGraph;
    childReplies?: ReplyGraph[];
    replyRatings?: ReplyRatingGraph[];
    replyQuestionTypes?: ReplyQuestionTypeGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
interface ReplyEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    TEXT?: string | IQStringField;
    IS_IDEA?: boolean | IQBooleanField;
    IS_EXPERIENCE?: boolean | IQBooleanField;
    IS_QUESTION?: boolean | IQBooleanField;
    NUMBER_OF_DOWN_RATINGS?: number | IQNumberField;
    NUMBER_OF_UP_RATINGS?: number | IQNumberField;
    NUMBER_OF_RATINGS?: number | IQNumberField;
    SITUATION_THREADS_RID_1?: number | IQNumberField;
    SITUATION_THREADS_AID_1?: number | IQNumberField;
    SITUATION_THREADS_ARID_1?: number | IQNumberField;
    REPLIES_RID_1?: number | IQNumberField;
    REPLIES_AID_1?: number | IQNumberField;
    REPLIES_ARID_1?: number | IQNumberField;
    SITUATION_IDEAS_RID_1?: number | IQNumberField;
    SITUATION_IDEAS_AID_1?: number | IQNumberField;
    SITUATION_IDEAS_ARID_1?: number | IQNumberField;
    USER_RATINGS_RID_1?: number | IQNumberField;
    USER_RATINGS_AID_1?: number | IQNumberField;
    USER_RATINGS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface ReplyECreateProperties extends Partial<ReplyEId>, ReplyEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface ReplyECreateColumns extends ReplyEId, ReplyEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QReply<IQE extends QReply = any> extends QAirEntity<IQE | QReply> {
    text: IQStringField;
    isIdea: IQBooleanField;
    isExperience: IQBooleanField;
    isQuestion: IQBooleanField;
    numberOfDownRatings: IQNumberField;
    numberOfUpRatings: IQNumberField;
    numberRatings: IQNumberField;
    situationThread: QSituationThreadQRelation;
    parentReply: QReplyQRelation;
    situationIdea: QSituationIdeaQRelation;
    userRating: QUserRatingQRelation;
    childReplies: IQAirEntityOneToManyRelation<Reply, QReply>;
    replyRatings: IQAirEntityOneToManyRelation<ReplyRating, QReplyRating>;
    replyQuestionTypes: IQAirEntityOneToManyRelation<ReplyQuestionType, QReplyQuestionType>;
}
interface QReplyQId extends QAirEntityQId {
}
interface QReplyQRelation extends QAirEntityQRelation<Reply, QReply>, QReplyQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface ReplyQuestionTypeESelect extends AirEntityESelect, ReplyQuestionTypeEOptionalId {
    reply?: ReplyESelect;
    questionType?: QuestionTypeESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface ReplyQuestionTypeEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface ReplyQuestionTypeEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface ReplyQuestionTypeEUpdateProperties extends AirEntityEUpdateProperties {
    reply?: ReplyEOptionalId;
    questionType?: QuestionTypeEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface ReplyQuestionTypeGraph extends ReplyQuestionTypeEOptionalId, AirEntityGraph {
    reply?: ReplyGraph;
    questionType?: QuestionTypeGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface ReplyQuestionTypeEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    REPLIES_RID_1?: number | IQNumberField;
    REPLIES_AID_1?: number | IQNumberField;
    REPLIES_ARID_1?: number | IQNumberField;
    QUESTION_TYPE_RID_1?: number | IQNumberField;
    QUESTION_TYPE_AID_1?: number | IQNumberField;
    QUESTION_TYPE_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface ReplyQuestionTypeECreateProperties extends Partial<ReplyQuestionTypeEId>, ReplyQuestionTypeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface ReplyQuestionTypeECreateColumns extends ReplyQuestionTypeEId, ReplyQuestionTypeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QReplyQuestionType<IQE extends QReplyQuestionType = any> extends QAirEntity<IQE | QReplyQuestionType> {
    reply: QReplyQRelation;
    questionType: QQuestionTypeQRelation;
}
interface QReplyQuestionTypeQId extends QAirEntityQId {
}
interface QReplyQuestionTypeQRelation extends QAirEntityQRelation<ReplyQuestionType, QReplyQuestionType>, QReplyQuestionTypeQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface QuestionTypeESelect extends AirEntityESelect, QuestionTypeEOptionalId {
    type?: string | IQStringField;
    replyQuestionTypes?: ReplyQuestionTypeESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface QuestionTypeEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface QuestionTypeEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface QuestionTypeEUpdateProperties extends AirEntityEUpdateProperties {
    type?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface QuestionTypeGraph extends QuestionTypeEOptionalId, AirEntityGraph {
    type?: string | IQStringField;
    replyQuestionTypes?: ReplyQuestionTypeGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
interface QuestionTypeEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    TYPE?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface QuestionTypeECreateProperties extends Partial<QuestionTypeEId>, QuestionTypeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface QuestionTypeECreateColumns extends QuestionTypeEId, QuestionTypeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QQuestionType<IQE extends QQuestionType = any> extends QAirEntity<IQE | QQuestionType> {
    type: IQStringField;
    replyQuestionTypes: IQAirEntityOneToManyRelation<ReplyQuestionType, QReplyQuestionType>;
}
interface QQuestionTypeQId extends QAirEntityQId {
}
interface QQuestionTypeQRelation extends QAirEntityQRelation<QuestionType, QQuestionType>, QQuestionTypeQId {
}

declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, DbEntity_LocalId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends ObservableDao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, DbEntity_LocalId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntity_LocalId);
}
interface IBaseQuestionTypeDao extends IObservableDao<QuestionType, QuestionTypeESelect, QuestionTypeECreateProperties, QuestionTypeEUpdateColumns, QuestionTypeEUpdateProperties, QuestionTypeEId, QuestionTypeGraph, QQuestionType> {
}
declare class BaseQuestionTypeDao extends SQDIDao<QuestionType, QuestionTypeESelect, QuestionTypeECreateProperties, QuestionTypeEUpdateColumns, QuestionTypeEUpdateProperties, QuestionTypeEId, QuestionTypeGraph, QQuestionType> implements IBaseQuestionTypeDao {
    static Find: DaoQueryDecorators<QuestionTypeESelect>;
    static FindOne: DaoQueryDecorators<QuestionTypeESelect>;
    static Search: DaoQueryDecorators<QuestionTypeESelect>;
    static SearchOne: DaoQueryDecorators<QuestionTypeESelect>;
    static Save(config: QuestionTypeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseReplyDao extends IObservableDao<Reply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> {
}
declare class BaseReplyDao extends SQDIDao<Reply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> implements IBaseReplyDao {
    static Find: DaoQueryDecorators<ReplyESelect>;
    static FindOne: DaoQueryDecorators<ReplyESelect>;
    static Search: DaoQueryDecorators<ReplyESelect>;
    static SearchOne: DaoQueryDecorators<ReplyESelect>;
    static Save(config: ReplyGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseReplyQuestionTypeDao extends IObservableDao<ReplyQuestionType, ReplyQuestionTypeESelect, ReplyQuestionTypeECreateProperties, ReplyQuestionTypeEUpdateColumns, ReplyQuestionTypeEUpdateProperties, ReplyQuestionTypeEId, ReplyQuestionTypeGraph, QReplyQuestionType> {
}
declare class BaseReplyQuestionTypeDao extends SQDIDao<ReplyQuestionType, ReplyQuestionTypeESelect, ReplyQuestionTypeECreateProperties, ReplyQuestionTypeEUpdateColumns, ReplyQuestionTypeEUpdateProperties, ReplyQuestionTypeEId, ReplyQuestionTypeGraph, QReplyQuestionType> implements IBaseReplyQuestionTypeDao {
    static Find: DaoQueryDecorators<ReplyQuestionTypeESelect>;
    static FindOne: DaoQueryDecorators<ReplyQuestionTypeESelect>;
    static Search: DaoQueryDecorators<ReplyQuestionTypeESelect>;
    static SearchOne: DaoQueryDecorators<ReplyQuestionTypeESelect>;
    static Save(config: ReplyQuestionTypeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseReplyRatingDao extends IObservableDao<ReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> {
}
declare class BaseReplyRatingDao extends SQDIDao<ReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> implements IBaseReplyRatingDao {
    static Find: DaoQueryDecorators<ReplyRatingESelect>;
    static FindOne: DaoQueryDecorators<ReplyRatingESelect>;
    static Search: DaoQueryDecorators<ReplyRatingESelect>;
    static SearchOne: DaoQueryDecorators<ReplyRatingESelect>;
    static Save(config: ReplyRatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseSituationThreadDao extends IObservableDao<SituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> {
}
declare class BaseSituationThreadDao extends SQDIDao<SituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> implements IBaseSituationThreadDao {
    static Find: DaoQueryDecorators<SituationThreadESelect>;
    static FindOne: DaoQueryDecorators<SituationThreadESelect>;
    static Search: DaoQueryDecorators<SituationThreadESelect>;
    static SearchOne: DaoQueryDecorators<SituationThreadESelect>;
    static Save(config: SituationThreadGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseUserRatingDao extends IObservableDao<UserRating, UserRatingESelect, UserRatingECreateProperties, UserRatingEUpdateColumns, UserRatingEUpdateProperties, UserRatingEId, UserRatingGraph, QUserRating> {
}
declare class BaseUserRatingDao extends SQDIDao<UserRating, UserRatingESelect, UserRatingECreateProperties, UserRatingEUpdateColumns, UserRatingEUpdateProperties, UserRatingEId, UserRatingGraph, QUserRating> implements IBaseUserRatingDao {
    static Find: DaoQueryDecorators<UserRatingESelect>;
    static FindOne: DaoQueryDecorators<UserRatingESelect>;
    static Search: DaoQueryDecorators<UserRatingESelect>;
    static SearchOne: DaoQueryDecorators<UserRatingESelect>;
    static Save(config: UserRatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}

declare class ReplyDao extends BaseReplyDao {
    findForSituationThread(situationThread: SituationThread | string): Promise<Reply[]>;
    updateUpOrDownRatingTotals(numberOfUpRatingsDelta: number, numberOfDownRatingsDelta: number, reply: Reply): Promise<void>;
    setReplyType(isIdea: boolean, isExperience: boolean, isQuestion: boolean, reply: Reply): Promise<void>;
}

declare class ReplyRatingDao extends BaseReplyRatingDao {
    findForReplyAndUser(reply: Reply, user: UserAccount): Promise<ReplyRating>;
    findAllForSituationThreadAndUser(situationThread: SituationThread, user: UserAccount): Promise<ReplyRating[]>;
}

declare class SituationThreadDao extends BaseSituationThreadDao {
    add(situationThread: SituationThread): Promise<void>;
    findWithListingDetailsForATopic(topic: Topic | string): Promise<SituationThread[]>;
    findWithSituation(situationThread: SituationThread | string): Promise<SituationThread>;
    updateReplyTypeTotals(numberOfIdeasDelta: number, numberOfExperiencesDelta: number, numberOfQuestionsDelta: number, situationThread: SituationThread): Promise<void>;
    updateReplyTotal(numberOfRepliesDelta: number, situationThread: SituationThread): Promise<void>;
}

interface SituationThreadVDescriptor<T> extends AirEntityVDescriptor<T> {
    numberOfExperiences?: number | IVNumberField;
    numberOfIdeas?: number | IVNumberField;
    numberOfQuestions?: number | IVNumberField;
    numberOfReplies?: number | IVNumberField;
    situation?: SituationVDescriptor<Situation>;
    replies?: ReplyVDescriptor<Reply>;
}

interface UserRatingVDescriptor<T> extends AirEntityVDescriptor<T> {
    ranking?: number | IVNumberField;
    userAccount?: UserAccountVDescriptor<UserAccount>;
    replies?: ReplyVDescriptor<Reply>;
}

interface ReplyRatingVDescriptor<T> extends AirEntityVDescriptor<T> {
    upOrDownRating?: number | IVNumberField;
    reply?: ReplyVDescriptor<Reply>;
}

interface ReplyVDescriptor<T> extends AirEntityVDescriptor<T> {
    text?: string | IVStringField;
    isIdea?: boolean | IVBooleanField;
    isExperience?: boolean | IVBooleanField;
    isQuestion?: boolean | IVBooleanField;
    numberOfDownRatings?: number | IVNumberField;
    numberOfUpRatings?: number | IVNumberField;
    numberRatings?: number | IVNumberField;
    situationThread?: SituationThreadVDescriptor<SituationThread>;
    parentReply?: ReplyVDescriptor<Reply>;
    situationIdea?: SituationIdeaVDescriptor<SituationIdea>;
    userRating?: UserRatingVDescriptor<UserRating>;
    childReplies?: ReplyVDescriptor<Reply>;
    replyRatings?: ReplyRatingVDescriptor<ReplyRating>;
    replyQuestionTypes?: ReplyQuestionTypeVDescriptor<ReplyQuestionType>;
}

interface ReplyQuestionTypeVDescriptor<T> extends AirEntityVDescriptor<T> {
    reply?: ReplyVDescriptor<Reply>;
    questionType?: QuestionTypeVDescriptor<QuestionType>;
}

interface QuestionTypeVDescriptor<T> extends AirEntityVDescriptor<T> {
    type?: string | IVStringField;
    replyQuestionTypes?: ReplyQuestionTypeVDescriptor<ReplyQuestionType>;
}

declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntity_LocalId);
}
interface IBaseQuestionTypeDvo extends IDvo<QuestionType, QuestionTypeVDescriptor<QuestionType>> {
}
declare class BaseQuestionTypeDvo extends SQDIDvo<QuestionType, QuestionTypeVDescriptor<QuestionType>> implements IBaseQuestionTypeDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseReplyDvo extends IDvo<Reply, ReplyVDescriptor<Reply>> {
}
declare class BaseReplyDvo extends SQDIDvo<Reply, ReplyVDescriptor<Reply>> implements IBaseReplyDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseReplyQuestionTypeDvo extends IDvo<ReplyQuestionType, ReplyQuestionTypeVDescriptor<ReplyQuestionType>> {
}
declare class BaseReplyQuestionTypeDvo extends SQDIDvo<ReplyQuestionType, ReplyQuestionTypeVDescriptor<ReplyQuestionType>> implements IBaseReplyQuestionTypeDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseReplyRatingDvo extends IDvo<ReplyRating, ReplyRatingVDescriptor<ReplyRating>> {
}
declare class BaseReplyRatingDvo extends SQDIDvo<ReplyRating, ReplyRatingVDescriptor<ReplyRating>> implements IBaseReplyRatingDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseSituationThreadDvo extends IDvo<SituationThread, SituationThreadVDescriptor<SituationThread>> {
}
declare class BaseSituationThreadDvo extends SQDIDvo<SituationThread, SituationThreadVDescriptor<SituationThread>> implements IBaseSituationThreadDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseUserRatingDvo extends IDvo<UserRating, UserRatingVDescriptor<UserRating>> {
}
declare class BaseUserRatingDvo extends SQDIDvo<UserRating, UserRatingVDescriptor<UserRating>> implements IBaseUserRatingDvo {
    static diSet(): boolean;
    constructor();
}

declare class ReplyDvo extends BaseReplyDvo {
}

declare class ReplyRatingDvo extends BaseReplyRatingDvo {
}

declare class ReplyApi {
    situationIdeaApi: SituationIdeaApi;
    replyDao: ReplyDao;
    replyDvo: ReplyDvo;
    replyRatingDao: ReplyRatingDao;
    replyRatingDvo: ReplyRatingDvo;
    airRequest: AirRequest;
    requestManager: RequestManager;
    situationThreadDao: SituationThreadDao;
    addReply(reply: Reply): Promise<void>;
    getRepliesForSituationThread(situationThreadId: string | SituationThread): Promise<Reply[]>;
    rateReply(replyRating: ReplyRating): Promise<void>;
    updateCounts(situationThreadUuId: string): Promise<void>;
    setReplyType(reply: Reply, type: 'experience' | 'idea' | 'question'): Promise<void>;
}

declare class SituationThreadDvo extends BaseSituationThreadDvo {
}

declare class SituationThreadApi {
    situationApi: SituationApi;
    situationThreadDao: SituationThreadDao;
    situationThreadDvo: SituationThreadDvo;
    addSituationThread(situationThread: SituationThread, situationRating: SituationRating): Promise<void>;
    findWithListingDetailsForATopic(topicId: string | Topic): Promise<SituationThread[]>;
    findById(situationThreadId: string | SituationThread): Promise<SituationThread>;
}

declare class QuestionTypeDao extends BaseQuestionTypeDao {
}

interface localhost_colon_8080____at_sapoto_slash_main_LocalQApp extends QAppInternal {
    db: DbApplication;
    QuestionType: QQuestionType;
    Reply: QReply;
    ReplyQuestionType: QReplyQuestionType;
    ReplyRating: QReplyRating;
    SituationThread: QSituationThread;
    UserRating: QUserRating;
}
declare const Q_localhost_colon_8080____at_sapoto_slash_main: localhost_colon_8080____at_sapoto_slash_main_LocalQApp;

declare function localhost_colon_8080____at_sapoto_slash_main_diSet(dbEntityId: number): boolean;

declare class ApplicationLoader extends AbstractApplicationLoader {
    constructor();
}

export { ApplicationLoader, BaseQuestionTypeDao, BaseQuestionTypeDvo, BaseReplyDao, BaseReplyDvo, BaseReplyQuestionTypeDao, BaseReplyQuestionTypeDvo, BaseReplyRatingDao, BaseReplyRatingDvo, BaseSituationThreadDao, BaseSituationThreadDvo, BaseUserRatingDao, BaseUserRatingDvo, IBaseQuestionTypeDao, IBaseQuestionTypeDvo, IBaseReplyDao, IBaseReplyDvo, IBaseReplyQuestionTypeDao, IBaseReplyQuestionTypeDvo, IBaseReplyRatingDao, IBaseReplyRatingDvo, IBaseSituationThreadDao, IBaseSituationThreadDvo, IBaseUserRatingDao, IBaseUserRatingDvo, QQuestionType, QQuestionTypeQId, QQuestionTypeQRelation, QReply, QReplyQId, QReplyQRelation, QReplyQuestionType, QReplyQuestionTypeQId, QReplyQuestionTypeQRelation, QReplyRating, QReplyRatingQId, QReplyRatingQRelation, QSituationThread, QSituationThreadQId, QSituationThreadQRelation, QUserRating, QUserRatingQId, QUserRatingQRelation, Q_localhost_colon_8080____at_sapoto_slash_main, QuestionType, QuestionTypeDao, QuestionTypeECreateColumns, QuestionTypeECreateProperties, QuestionTypeEId, QuestionTypeEOptionalId, QuestionTypeESelect, QuestionTypeEUpdateColumns, QuestionTypeEUpdateProperties, QuestionTypeGraph, QuestionTypeVDescriptor, QuestionType_Type, Reply, ReplyApi, ReplyDao, ReplyDvo, ReplyECreateColumns, ReplyECreateProperties, ReplyEId, ReplyEOptionalId, ReplyESelect, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyGraph, ReplyQuestionType, ReplyQuestionTypeECreateColumns, ReplyQuestionTypeECreateProperties, ReplyQuestionTypeEId, ReplyQuestionTypeEOptionalId, ReplyQuestionTypeESelect, ReplyQuestionTypeEUpdateColumns, ReplyQuestionTypeEUpdateProperties, ReplyQuestionTypeGraph, ReplyQuestionTypeVDescriptor, ReplyRating, ReplyRatingDao, ReplyRatingDvo, ReplyRatingECreateColumns, ReplyRatingECreateProperties, ReplyRatingEId, ReplyRatingEOptionalId, ReplyRatingESelect, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingGraph, ReplyRatingVDescriptor, ReplyVDescriptor, Reply_Type, SQDIDao, SQDIDvo, SituationThread, SituationThreadApi, SituationThreadDao, SituationThreadDvo, SituationThreadECreateColumns, SituationThreadECreateProperties, SituationThreadEId, SituationThreadEOptionalId, SituationThreadESelect, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadGraph, SituationThreadVDescriptor, UserRating, UserRatingECreateColumns, UserRatingECreateProperties, UserRatingEId, UserRatingEOptionalId, UserRatingESelect, UserRatingEUpdateColumns, UserRatingEUpdateProperties, UserRatingGraph, UserRatingVDescriptor, UserRating_Ranking, localhost_colon_8080____at_sapoto_slash_main_LocalQApp, localhost_colon_8080____at_sapoto_slash_main_diSet };
