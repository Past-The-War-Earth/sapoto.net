import { app } from '@sapoto/dependency-injection'
import type { SituationApi, ThemeApi, TopicApi } from "../generated/api/api";

export const core = app('@sapoto/core')

export const SITUATION_API = core.token<SituationApi>({
    class: null,
    interface: 'SituationApi',
    token: 'SITUATION_API'
})
export const THEME_API = core.token<ThemeApi>({
    class: null,
    interface: 'ThemeApi',
    token: 'THEME_API'
})
export const TOPIC_API = core.token<TopicApi>({
    class: null,
    interface: 'TopicApi',
    token: 'TOPIC_API'
})
