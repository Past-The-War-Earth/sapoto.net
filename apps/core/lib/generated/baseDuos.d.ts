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
import { IDuo, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-traffic-control';
import { Duo } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDuo<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Duo<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseSituationDuo extends IDuo<Situation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}
export declare class BaseSituationDuo extends SQDIDuo<Situation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> implements IBaseSituationDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationRatingDuo extends IDuo<SituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating> {
}
export declare class BaseSituationRatingDuo extends SQDIDuo<SituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating> implements IBaseSituationRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseThemeDuo extends IDuo<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}
export declare class BaseThemeDuo extends SQDIDuo<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> implements IBaseThemeDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTopicDuo extends IDuo<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> {
}
export declare class BaseTopicDuo extends SQDIDuo<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> implements IBaseTopicDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserTopicFavoriteDuo extends IDuo<UserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite> {
}
export declare class BaseUserTopicFavoriteDuo extends SQDIDuo<UserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite> implements IBaseUserTopicFavoriteDuo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDuos.d.ts.map