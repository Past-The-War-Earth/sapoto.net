import { APPLICATION_STORE, IApplicationLoader } from '@airport/apron'
import { API_REGISTRY } from '@airport/check-in'
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator'
import { APPLICATION_INITIALIZER } from '@airport/terminal-map'
import { SITUATION_API } from '@sapoto/core'
import { ApplicationLoader } from './ApplicationLoader'
import { votecube } from './common-tokens'

import { IReplyDao, ReplyDao } from '../dao/ReplyDao'
import { IReplyRatingDao, ReplyRatingDao } from '../dao/ReplyRatingDao'
import { ISituationThreadDao, SituationThreadDao } from '../dao/SituationThreadDao'
import { IReplyTypeDao, ReplyTypeDao } from '../dao/ReplyTypeDao'
import { SITUATION_THREAD_API } from './common-tokens'
import { SituationThreadApi } from '../api/api'
import { IDEA_SITUATION_API } from '@votecube/votecube'

export const REPLY_DAO = votecube.token<IReplyDao>({
    class: ReplyDao,
    interface: 'IReplyDao',
    token: 'REPLY_DAO'
})
export const REPLY_RATING_DAO = votecube.token<IReplyRatingDao>({
    class: ReplyRatingDao,
    interface: 'IReplyRatingDao',
    token: 'REPLY_RATING_DAO'
})
export const REPLY_TYPE_DAO = votecube.token<IReplyTypeDao>({
    class: ReplyTypeDao,
    interface: 'IReplyTypeDao',
    token: 'REPLY_TYPE_DAO'
})
export const SITUATION_THREAD_DAO = votecube.token<ISituationThreadDao>({
    class: SituationThreadDao,
    interface: 'ISituationThreadDao',
    token: 'SITUATION_THREAD_DAO'
})

SITUATION_THREAD_API.setClass(SituationThreadApi)
SITUATION_THREAD_API.setDependencies({
    ideaSituationApi: IDEA_SITUATION_API,
    replyDao: REPLY_DAO,
    replyRatingDao: REPLY_RATING_DAO,
    replyTypeDao: REPLY_TYPE_DAO,
    situationApi: SITUATION_API,
    situationThreadDao: SITUATION_THREAD_DAO
})

export const APPLICATION_LOADER = votecube.token<IApplicationLoader>({
    class: ApplicationLoader,
    interface: 'IApplicationLoader',
    token: 'APPLICATION_LOADER'
})

APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    applicationStore: APPLICATION_STORE,
    apiRegistry: API_REGISTRY
})
