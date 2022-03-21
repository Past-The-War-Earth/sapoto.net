import { ISituationDao, ISituationRatingDao } from "./dao/dao";
import { IThemeDao } from "./dao/ThemeDao";
import { ITopicDao } from "./dao/TopicDao";
import { IDemoDataLoader } from "./DemoDataLoader";
import { core } from "./tokens";

export const DEMO_DATA_LOADER = core.token<IDemoDataLoader>('DEMO_DATA_LOADER')
export const SITUATION_DAO = core.token<ISituationDao>('SITUATION_DAO')
export const SITUATION_RATING_DAO = core.token<ISituationRatingDao>('SITUATION_RATING_DAO')
export const TOPIC_DAO = core.token<ITopicDao>('TOPIC_DAO')
export const THEME_DAO = core.token<IThemeDao>('THEME_DAO')
