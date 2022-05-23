import { Situation } from '../ddl/situation';
import { SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation } from './qsituation';
import { SituationRating } from '../ddl/situationrating';
import { SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating } from './qsituationrating';
import { Theme } from '../ddl/theme';
import { ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme } from './qtheme';
import { Topic } from '../ddl/topic';
import { TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic } from './qtopic';
import { UserTopicFavorite } from '../ddl/usertopicfavorite';
import { UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite } from './qusertopicfavorite';
import { IDao, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-traffic-control';
import { Dao, DaoQueryDecorators } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseSituationDao extends IDao<Situation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}
export declare class BaseSituationDao extends SQDIDao<Situation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> implements IBaseSituationDao {
    static Find: DaoQueryDecorators<SituationESelect>;
    static FindOne: DaoQueryDecorators<SituationESelect>;
    static Search: DaoQueryDecorators<SituationESelect>;
    static SearchOne: DaoQueryDecorators<SituationESelect>;
    static Save(config: SituationGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationRatingDao extends IDao<SituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating> {
}
export declare class BaseSituationRatingDao extends SQDIDao<SituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating> implements IBaseSituationRatingDao {
    static Find: DaoQueryDecorators<SituationRatingESelect>;
    static FindOne: DaoQueryDecorators<SituationRatingESelect>;
    static Search: DaoQueryDecorators<SituationRatingESelect>;
    static SearchOne: DaoQueryDecorators<SituationRatingESelect>;
    static Save(config: SituationRatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseThemeDao extends IDao<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}
export declare class BaseThemeDao extends SQDIDao<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> implements IBaseThemeDao {
    static Find: DaoQueryDecorators<ThemeESelect>;
    static FindOne: DaoQueryDecorators<ThemeESelect>;
    static Search: DaoQueryDecorators<ThemeESelect>;
    static SearchOne: DaoQueryDecorators<ThemeESelect>;
    static Save(config: ThemeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseTopicDao extends IDao<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> {
}
export declare class BaseTopicDao extends SQDIDao<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> implements IBaseTopicDao {
    static Find: DaoQueryDecorators<TopicESelect>;
    static FindOne: DaoQueryDecorators<TopicESelect>;
    static Search: DaoQueryDecorators<TopicESelect>;
    static SearchOne: DaoQueryDecorators<TopicESelect>;
    static Save(config: TopicGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserTopicFavoriteDao extends IDao<UserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite> {
}
export declare class BaseUserTopicFavoriteDao extends SQDIDao<UserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite> implements IBaseUserTopicFavoriteDao {
    static Find: DaoQueryDecorators<UserTopicFavoriteESelect>;
    static FindOne: DaoQueryDecorators<UserTopicFavoriteESelect>;
    static Search: DaoQueryDecorators<UserTopicFavoriteESelect>;
    static SearchOne: DaoQueryDecorators<UserTopicFavoriteESelect>;
    static Save(config: UserTopicFavoriteGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDaos.d.ts.map