import { domain } from '@airport/di'

export const core = domain('localhost:8100').app('@sapoto/core')

export const SITUATION_API = core.token<ISituationApi>('ISituationApi')
export const THEME_API = core.token<IThemeApi>('IThemeApi')
export const TOPIC_API = core.token<ITopicApi>('ITopicApi')