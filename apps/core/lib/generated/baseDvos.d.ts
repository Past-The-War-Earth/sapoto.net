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
import { IDvo, Dvo } from '@airbridge/validate';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseSituationDvo extends IDvo<Situation, SituationVDescriptor<Situation>> {
}
export declare class BaseSituationDvo extends SQDIDvo<Situation, SituationVDescriptor<Situation>> implements IBaseSituationDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationRatingDvo extends IDvo<SituationRating, SituationRatingVDescriptor<SituationRating>> {
}
export declare class BaseSituationRatingDvo extends SQDIDvo<SituationRating, SituationRatingVDescriptor<SituationRating>> implements IBaseSituationRatingDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseThemeDvo extends IDvo<Theme, ThemeVDescriptor<Theme>> {
}
export declare class BaseThemeDvo extends SQDIDvo<Theme, ThemeVDescriptor<Theme>> implements IBaseThemeDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseTopicDvo extends IDvo<Topic, TopicVDescriptor<Topic>> {
}
export declare class BaseTopicDvo extends SQDIDvo<Topic, TopicVDescriptor<Topic>> implements IBaseTopicDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseUserTopicFavoriteDvo extends IDvo<UserTopicFavorite, UserTopicFavoriteVDescriptor<UserTopicFavorite>> {
}
export declare class BaseUserTopicFavoriteDvo extends SQDIDvo<UserTopicFavorite, UserTopicFavoriteVDescriptor<UserTopicFavorite>> implements IBaseUserTopicFavoriteDvo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDvos.d.ts.map