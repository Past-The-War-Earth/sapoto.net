import { app } from '@sapoto/dependency-injection'
import { ISituationApi } from "./api/SituationApi";
import { IThemeApi } from './api/ThemeApi';
import { ITopicApi } from './api/TopicApi';

export const core = app('core')

export const SITUATION_API = core.token<ISituationApi>('ISituationApi')
export const THEME_API = core.token<IThemeApi>('IThemeApi')
export const TOPIC_API = core.token<ITopicApi>('ITopicApi')