import { domain } from '@airport/direction-indicator'
import { IReplyApi } from './wrappers/ReplyApiClient'
import { ISituationThreadApi } from './wrappers/SituationThreadApiClient'

// export const main = app('main')
export const main = domain('localhost:8080').app('@sapoto/main')
main.autopilot = true

export const SITUATION_THREAD_API = main.token<ISituationThreadApi>({
    class: null,
    interface: 'ISituationThreadApi',
    token: 'SITUATION_THREAD_API'
})

export const REPLY_API = main.token<IReplyApi>({
    class: null,
    interface: 'IReplyApi',
    token: 'REPLY_API'
})