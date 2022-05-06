import { domain } from '@airport/direction-indicator'
import type { ISituationApi } from './wrappers/SituationApiClient'
import type { IThemeApi } from './wrappers/ThemeApiClient'
import type { ITopicApi } from './wrappers/TopicApiClient'

export const core = domain('localhost:8100').app('@sapoto/core')

export const SITUATION_API = core.token<ISituationApi>({
    class: null,
    interface: 'ISituationApi',
    token: 'SITUATION_API'
})
export const THEME_API = core.token<IThemeApi>({
    class: null,
    interface: 'IThemeApi',
    token: 'THEME_API'
})
export const TOPIC_API = core.token<ITopicApi>({
    class: null,
    interface: 'ITopicApi',
    token: 'TOPIC_API'
})
