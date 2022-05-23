import { domain } from '@airport/direction-indicator';
import { ReplyApi, SituationThreadApi } from '../api/api';

//export const main = app('main')
export const main = domain('localhost:8080').app('@sapoto/main')

export const SITUATION_THREAD_API = main.token<SituationThreadApi>({
    class: null,
    interface: 'SituationThreadApi',
    token: 'SITUATION_THREAD_API'
})

export const REPLY_API = main.token<ReplyApi>({
    class: null,
    interface: 'ReplyApi',
    token: 'REPLY_API'
})