import { app } from '@sapoto/dependency-injection'
import type { ISituationApi } from "../api/SituationApi";
import type { IThemeApi } from '../api/ThemeApi';
import type { ITopicApi } from '../api/TopicApi';

export const core = app('@sapoto/core')

export const SITUATION_API = core.token<ISituationApi>({
    class: null,
    interface: 'ISituationApi',
    token: 'ISituationApi'
})
export const THEME_API = core.token<IThemeApi>({
    class: null,
    interface: 'ISituationApi',
    token: 'IThemeApi'
})
export const TOPIC_API = core.token<ITopicApi>({
    class: null,
    interface: 'ITopicApi',
    token: 'TOPIC_API'
})
