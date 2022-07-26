import { Situation } from '../ddl/situation';
import { SituationVDescriptor } from './vsituation';
import { SituationRating } from '../ddl/situationrating';
import { SituationRatingVDescriptor } from './vsituationrating';
import { Theme } from '../ddl/theme';
import { ThemeVDescriptor } from './vtheme';
import { Topic } from '../ddl/topic';
import { TopicVDescriptor } from './vtopic';
import { UserTopicFavorite } from '../ddl/usertopicfavorite';
import { UserTopicFavoriteVDescriptor } from './vusertopicfavorite';
import { IDvo, Dvo } from '@airport/airbridge-validate';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseSituationDvo extends IDvo<Situation, SituationVDescriptor> {
}
export declare class BaseSituationDvo extends SQDIDvo<Situation, SituationVDescriptor> implements IBaseSituationDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationRatingDvo extends IDvo<SituationRating, SituationRatingVDescriptor> {
}
export declare class BaseSituationRatingDvo extends SQDIDvo<SituationRating, SituationRatingVDescriptor> implements IBaseSituationRatingDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseThemeDvo extends IDvo<Theme, ThemeVDescriptor> {
}
export declare class BaseThemeDvo extends SQDIDvo<Theme, ThemeVDescriptor> implements IBaseThemeDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTopicDvo extends IDvo<Topic, TopicVDescriptor> {
}
export declare class BaseTopicDvo extends SQDIDvo<Topic, TopicVDescriptor> implements IBaseTopicDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserTopicFavoriteDvo extends IDvo<UserTopicFavorite, UserTopicFavoriteVDescriptor> {
}
export declare class BaseUserTopicFavoriteDvo extends SQDIDvo<UserTopicFavorite, UserTopicFavoriteVDescriptor> implements IBaseUserTopicFavoriteDvo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDvos.d.ts.map