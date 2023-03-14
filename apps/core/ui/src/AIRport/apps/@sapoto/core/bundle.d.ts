import { AirEntity, AirEntityESelect, AirEntityEId, AirEntityEUpdateProperties, AirEntityGraph, AirEntityEUpdateColumns, QAirEntity, QAirEntityQId, QAirEntityQRelation, AirEntityVDescriptor } from '@airport/final-approach';
import { IQStringField, IQNumberField, IQDateField, IQAirEntityOneToManyRelation, IQBooleanField, IEntitySelectProperties, IEntityCreateProperties, IEntityUpdateColumns, IEntityUpdateProperties, IEntityIdProperties, IEntityCascadeGraph, IQEntity } from '@airport/tarmaq-query';
import { DbEntity_LocalId, DbApplication } from '@airport/ground-control';
import { ObservableDao, IObservableDao, DaoQueryDecorators } from '@airport/tarmaq-dao';
import { AirEntityId } from '@airport/aviation-communication';
import { UserAccount } from '@airport/travel-document-checkpoint';
import { IVStringField, IVNumberField, IVBooleanField, Dvo, IDvo } from '@airbridge/validate';
import { RequestManager } from '@airport/web-tower';
import { QAppInternal } from '@airport/air-traffic-control';
import { AbstractApplicationLoader } from '@airport/terminal-map';
import * as _airport_direction_indicator from '@airport/direction-indicator';

declare class Theme extends AirEntity {
    name: string;
    imageName: string;
    topics: Topic[];
}

declare class Topic extends AirEntity {
    name: string;
    imagePath: string;
    theme: Theme;
    situations: Situation$1[];
}

declare class Situation$1 extends AirEntity {
    text: string;
    urgencyTotal?: number;
    numberOfUrgencyRatings?: number;
    importanceTotal?: number;
    numberOfImportanceRatings?: number;
    topic: Topic;
    ratings?: SituationRating[];
    userRating?: SituationRating;
}

declare class SituationRating extends AirEntity {
    importanceRating: 1 | 2 | 3 | 4 | 5;
    urgencyRating: 1 | 2 | 3 | 4 | 5;
    situation: Situation$1;
}

declare class Situation extends AirEntity {
    text: string;
    urgencyTotal?: number;
    numberOfUrgencyRatings?: number;
    importanceTotal?: number;
    numberOfImportanceRatings?: number;
    topic: Topic;
    ratings?: SituationRating[];
    userRating?: SituationRating;
}

interface ITotalDelta {
    totalDelta: number;
    numberDelta: 0 | 1;
}

/**
 * SELECT - All fields and relations (optional).
 */
interface ThemeESelect extends AirEntityESelect, ThemeEOptionalId {
    name?: string | IQStringField;
    imageName?: string | IQStringField;
    topics?: TopicESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface ThemeEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface ThemeEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface ThemeEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    imageName?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface ThemeGraph extends ThemeEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    imageName?: string | IQStringField;
    topics?: TopicGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
interface ThemeEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    NAME?: string | IQStringField;
    IMAGENAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface ThemeECreateProperties extends Partial<ThemeEId>, ThemeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface ThemeECreateColumns extends ThemeEId, ThemeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QTheme<IQE extends QTheme = any> extends QAirEntity<IQE | QTheme> {
    name: IQStringField;
    imageName: IQStringField;
    topics: IQAirEntityOneToManyRelation<Topic, QTopic>;
}
interface QThemeQId extends QAirEntityQId {
}
interface QThemeQRelation extends QAirEntityQRelation<Theme, QTheme>, QThemeQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface TopicESelect extends AirEntityESelect, TopicEOptionalId {
    name?: string | IQStringField;
    imagePath?: string | IQStringField;
    theme?: ThemeESelect;
    situations?: SituationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface TopicEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface TopicEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface TopicEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    imagePath?: string | IQStringField;
    theme?: ThemeEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface TopicGraph extends TopicEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    imagePath?: string | IQStringField;
    theme?: ThemeGraph;
    situations?: SituationGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
interface TopicEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    NAME?: string | IQStringField;
    IMAGEPATH?: string | IQStringField;
    THEME_RID_1?: number | IQNumberField;
    THEME_AID_1?: number | IQNumberField;
    THEME_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface TopicECreateProperties extends Partial<TopicEId>, TopicEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface TopicECreateColumns extends TopicEId, TopicEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QTopic<IQE extends QTopic = any> extends QAirEntity<IQE | QTopic> {
    name: IQStringField;
    imagePath: IQStringField;
    theme: QThemeQRelation;
    situations: IQAirEntityOneToManyRelation<Situation$1, QSituation>;
}
interface QTopicQId extends QAirEntityQId {
}
interface QTopicQRelation extends QAirEntityQRelation<Topic, QTopic>, QTopicQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface SituationRatingESelect extends AirEntityESelect, SituationRatingEOptionalId {
    importanceRating?: number | IQNumberField;
    urgencyRating?: number | IQNumberField;
    situation?: SituationESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface SituationRatingEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface SituationRatingEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface SituationRatingEUpdateProperties extends AirEntityEUpdateProperties {
    importanceRating?: number | IQNumberField;
    urgencyRating?: number | IQNumberField;
    situation?: SituationEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface SituationRatingGraph extends SituationRatingEOptionalId, AirEntityGraph {
    importanceRating?: number | IQNumberField;
    urgencyRating?: number | IQNumberField;
    situation?: SituationGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface SituationRatingEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    IMPORTANCE_RATING?: number | IQNumberField;
    URGENCY_RATING?: number | IQNumberField;
    SITUATIONS_RID_1?: number | IQNumberField;
    SITUATIONS_AID_1?: number | IQNumberField;
    SITUATIONS_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface SituationRatingECreateProperties extends Partial<SituationRatingEId>, SituationRatingEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface SituationRatingECreateColumns extends SituationRatingEId, SituationRatingEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QSituationRating<IQE extends QSituationRating = any> extends QAirEntity<IQE | QSituationRating> {
    importanceRating: IQNumberField;
    urgencyRating: IQNumberField;
    situation: QSituationQRelation;
}
interface QSituationRatingQId extends QAirEntityQId {
}
interface QSituationRatingQRelation extends QAirEntityQRelation<SituationRating, QSituationRating>, QSituationRatingQId {
}

/**
 * SELECT - All fields and relations (optional).
 */
interface SituationESelect extends AirEntityESelect, SituationEOptionalId {
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
interface SituationEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface SituationEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface SituationEUpdateProperties extends AirEntityEUpdateProperties {
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
interface SituationGraph extends SituationEOptionalId, AirEntityGraph {
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
interface SituationEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
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
interface SituationECreateProperties extends Partial<SituationEId>, SituationEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface SituationECreateColumns extends SituationEId, SituationEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QSituation<IQE extends QSituation = any> extends QAirEntity<IQE | QSituation> {
    text: IQStringField;
    urgencyTotal: IQNumberField;
    numberOfUrgencyRatings: IQNumberField;
    importanceTotal: IQNumberField;
    numberOfImportanceRatings: IQNumberField;
    topic: QTopicQRelation;
    ratings: IQAirEntityOneToManyRelation<SituationRating, QSituationRating>;
}
interface QSituationQId extends QAirEntityQId {
}
interface QSituationQRelation extends QAirEntityQRelation<Situation$1, QSituation>, QSituationQId {
}

declare class UserTopicFavorite extends AirEntity {
    favorite: boolean;
    topic: Topic;
}

/**
 * SELECT - All fields and relations (optional).
 */
interface UserTopicFavoriteESelect extends AirEntityESelect, UserTopicFavoriteEOptionalId {
    favorite?: boolean | IQBooleanField;
    topic?: TopicESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
interface UserTopicFavoriteEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
interface UserTopicFavoriteEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
interface UserTopicFavoriteEUpdateProperties extends AirEntityEUpdateProperties {
    favorite?: boolean | IQBooleanField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
interface UserTopicFavoriteGraph extends UserTopicFavoriteEOptionalId, AirEntityGraph {
    favorite?: boolean | IQBooleanField;
    topic?: TopicGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
interface UserTopicFavoriteEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    FAVORITE?: boolean | IQBooleanField;
    TOPIC_RID_1?: number | IQNumberField;
    TOPIC_AID_1?: number | IQNumberField;
    TOPIC_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
interface UserTopicFavoriteECreateProperties extends Partial<UserTopicFavoriteEId>, UserTopicFavoriteEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
interface UserTopicFavoriteECreateColumns extends UserTopicFavoriteEId, UserTopicFavoriteEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.DbEntity_Name).
 */
interface QUserTopicFavorite<IQE extends QUserTopicFavorite = any> extends QAirEntity<IQE | QUserTopicFavorite> {
    favorite: IQBooleanField;
    topic: QTopicQRelation;
}
interface QUserTopicFavoriteQId extends QAirEntityQId {
}
interface QUserTopicFavoriteQRelation extends QAirEntityQRelation<UserTopicFavorite, QUserTopicFavorite>, QUserTopicFavoriteQId {
}

declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, DbEntity_LocalId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends ObservableDao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, DbEntity_LocalId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntity_LocalId);
}
interface IBaseSituationDao extends IObservableDao<Situation$1, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}
declare class BaseSituationDao extends SQDIDao<Situation$1, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> implements IBaseSituationDao {
    static Find: DaoQueryDecorators<SituationESelect>;
    static FindOne: DaoQueryDecorators<SituationESelect>;
    static Search: DaoQueryDecorators<SituationESelect>;
    static SearchOne: DaoQueryDecorators<SituationESelect>;
    static Save(config: SituationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseSituationRatingDao extends IObservableDao<SituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating> {
}
declare class BaseSituationRatingDao extends SQDIDao<SituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating> implements IBaseSituationRatingDao {
    static Find: DaoQueryDecorators<SituationRatingESelect>;
    static FindOne: DaoQueryDecorators<SituationRatingESelect>;
    static Search: DaoQueryDecorators<SituationRatingESelect>;
    static SearchOne: DaoQueryDecorators<SituationRatingESelect>;
    static Save(config: SituationRatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseThemeDao extends IObservableDao<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}
declare class BaseThemeDao extends SQDIDao<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> implements IBaseThemeDao {
    static Find: DaoQueryDecorators<ThemeESelect>;
    static FindOne: DaoQueryDecorators<ThemeESelect>;
    static Search: DaoQueryDecorators<ThemeESelect>;
    static SearchOne: DaoQueryDecorators<ThemeESelect>;
    static Save(config: ThemeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseTopicDao extends IObservableDao<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> {
}
declare class BaseTopicDao extends SQDIDao<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> implements IBaseTopicDao {
    static Find: DaoQueryDecorators<TopicESelect>;
    static FindOne: DaoQueryDecorators<TopicESelect>;
    static Search: DaoQueryDecorators<TopicESelect>;
    static SearchOne: DaoQueryDecorators<TopicESelect>;
    static Save(config: TopicGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
interface IBaseUserTopicFavoriteDao extends IObservableDao<UserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite> {
}
declare class BaseUserTopicFavoriteDao extends SQDIDao<UserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite> implements IBaseUserTopicFavoriteDao {
    static Find: DaoQueryDecorators<UserTopicFavoriteESelect>;
    static FindOne: DaoQueryDecorators<UserTopicFavoriteESelect>;
    static Search: DaoQueryDecorators<UserTopicFavoriteESelect>;
    static SearchOne: DaoQueryDecorators<UserTopicFavoriteESelect>;
    static Save(config: UserTopicFavoriteGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}

declare class SituationDao extends BaseSituationDao {
    updateShareTotal(situation: Situation, importanceDelta: ITotalDelta, urgencyDelta: ITotalDelta): Promise<void>;
}

declare class SituationRatingDao extends BaseSituationRatingDao {
    findForSituationAndUser(situationUuId: string | AirEntityId, user: UserAccount): Promise<SituationRating>;
}

interface ThemeVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    imageName?: string | IVStringField;
    topics?: TopicVDescriptor<Topic>;
}

interface TopicVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    imagePath?: string | IVStringField;
    theme?: ThemeVDescriptor<Theme>;
    situations?: SituationVDescriptor<Situation$1>;
}

interface SituationRatingVDescriptor<T> extends AirEntityVDescriptor<T> {
    importanceRating?: number | IVNumberField;
    urgencyRating?: number | IVNumberField;
    situation?: SituationVDescriptor<Situation$1>;
}

interface SituationVDescriptor<T> extends AirEntityVDescriptor<T> {
    text?: string | IVStringField;
    urgencyTotal?: number | IVNumberField;
    numberOfUrgencyRatings?: number | IVNumberField;
    importanceTotal?: number | IVNumberField;
    numberOfImportanceRatings?: number | IVNumberField;
    topic?: TopicVDescriptor<Topic>;
    ratings?: SituationRatingVDescriptor<SituationRating>;
}

interface UserTopicFavoriteVDescriptor<T> extends AirEntityVDescriptor<T> {
    favorite?: boolean | IVBooleanField;
    topic?: TopicVDescriptor<Topic>;
}

declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntity_LocalId);
}
interface IBaseSituationDvo extends IDvo<Situation$1, SituationVDescriptor<Situation$1>> {
}
declare class BaseSituationDvo extends SQDIDvo<Situation$1, SituationVDescriptor<Situation$1>> implements IBaseSituationDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseSituationRatingDvo extends IDvo<SituationRating, SituationRatingVDescriptor<SituationRating>> {
}
declare class BaseSituationRatingDvo extends SQDIDvo<SituationRating, SituationRatingVDescriptor<SituationRating>> implements IBaseSituationRatingDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseThemeDvo extends IDvo<Theme, ThemeVDescriptor<Theme>> {
}
declare class BaseThemeDvo extends SQDIDvo<Theme, ThemeVDescriptor<Theme>> implements IBaseThemeDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseTopicDvo extends IDvo<Topic, TopicVDescriptor<Topic>> {
}
declare class BaseTopicDvo extends SQDIDvo<Topic, TopicVDescriptor<Topic>> implements IBaseTopicDvo {
    static diSet(): boolean;
    constructor();
}
interface IBaseUserTopicFavoriteDvo extends IDvo<UserTopicFavorite, UserTopicFavoriteVDescriptor<UserTopicFavorite>> {
}
declare class BaseUserTopicFavoriteDvo extends SQDIDvo<UserTopicFavorite, UserTopicFavoriteVDescriptor<UserTopicFavorite>> implements IBaseUserTopicFavoriteDvo {
    static diSet(): boolean;
    constructor();
}

declare class SituationDvo extends BaseSituationDvo {
}

declare class SituationRatingDvo extends BaseSituationRatingDvo {
}

declare class SituationApi {
    requestManager: RequestManager;
    situationDao: SituationDao;
    situationDvo: SituationDvo;
    situationRatingDao: SituationRatingDao;
    situationRatingDvo: SituationRatingDvo;
    findById(situation: Situation$1 | string): Promise<Situation$1>;
    save(situation: Situation$1): Promise<void>;
    rateSituation(situation: Situation$1, situationRating: SituationRating): Promise<SituationRating>;
    private doRateSituation;
    getNewSituation(): Promise<Situation$1>;
}

declare class ThemeDao extends BaseThemeDao {
    getAllWithTopics(): Promise<Theme[]>;
}

declare class ThemeApi {
    themeDao: ThemeDao;
    getAllWithTopics(): Promise<Theme[]>;
}

declare class TopicDao extends BaseTopicDao {
}

declare class TopicApi {
    topicDao: TopicDao;
    findAll(): Promise<Topic[]>;
    findOne(topicId: string | Topic): Promise<Topic>;
}

interface localhost_colon_8100____at_sapoto_slash_core_LocalQApp extends QAppInternal {
    db: DbApplication;
    Situation: QSituation;
    SituationRating: QSituationRating;
    Theme: QTheme;
    Topic: QTopic;
    UserTopicFavorite: QUserTopicFavorite;
}
declare const Q_localhost_colon_8100____at_sapoto_slash_core: localhost_colon_8100____at_sapoto_slash_core_LocalQApp;

declare function localhost_colon_8100____at_sapoto_slash_core_diSet(dbEntityId: number): boolean;

declare class ApplicationLoader extends AbstractApplicationLoader {
    constructor();
}

declare const sapoto_core: _airport_direction_indicator.IInjectionApplication;

declare function initAIRportApp(): Promise<void>;

export { ApplicationLoader, BaseSituationDao, BaseSituationDvo, BaseSituationRatingDao, BaseSituationRatingDvo, BaseThemeDao, BaseThemeDvo, BaseTopicDao, BaseTopicDvo, BaseUserTopicFavoriteDao, BaseUserTopicFavoriteDvo, IBaseSituationDao, IBaseSituationDvo, IBaseSituationRatingDao, IBaseSituationRatingDvo, IBaseThemeDao, IBaseThemeDvo, IBaseTopicDao, IBaseTopicDvo, IBaseUserTopicFavoriteDao, IBaseUserTopicFavoriteDvo, ITotalDelta, QSituation, QSituationQId, QSituationQRelation, QSituationRating, QSituationRatingQId, QSituationRatingQRelation, QTheme, QThemeQId, QThemeQRelation, QTopic, QTopicQId, QTopicQRelation, QUserTopicFavorite, QUserTopicFavoriteQId, QUserTopicFavoriteQRelation, Q_localhost_colon_8100____at_sapoto_slash_core, SQDIDao, SQDIDvo, Situation$1 as Situation, SituationApi, SituationDao, SituationDvo, SituationECreateColumns, SituationECreateProperties, SituationEId, SituationEOptionalId, SituationESelect, SituationEUpdateColumns, SituationEUpdateProperties, SituationGraph, SituationRating, SituationRatingDao, SituationRatingDvo, SituationRatingECreateColumns, SituationRatingECreateProperties, SituationRatingEId, SituationRatingEOptionalId, SituationRatingESelect, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingGraph, SituationRatingVDescriptor, SituationVDescriptor, Theme, ThemeApi, ThemeDao, ThemeECreateColumns, ThemeECreateProperties, ThemeEId, ThemeEOptionalId, ThemeESelect, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeGraph, ThemeVDescriptor, Topic, TopicApi, TopicDao, TopicECreateColumns, TopicECreateProperties, TopicEId, TopicEOptionalId, TopicESelect, TopicEUpdateColumns, TopicEUpdateProperties, TopicGraph, TopicVDescriptor, UserTopicFavorite, UserTopicFavoriteECreateColumns, UserTopicFavoriteECreateProperties, UserTopicFavoriteEId, UserTopicFavoriteEOptionalId, UserTopicFavoriteESelect, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteGraph, UserTopicFavoriteVDescriptor, initAIRportApp, localhost_colon_8100____at_sapoto_slash_core_LocalQApp, localhost_colon_8100____at_sapoto_slash_core_diSet, sapoto_core };
