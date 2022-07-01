import { APPLICATION_LOADER } from '@airport/apron'
import { API_REGISTRY } from '@airport/check-in'
import { APPLICATION_INITIALIZER, TERMINAL_STORE } from '@airport/terminal-map'
import { SituationApi } from '../api/SituationApi'
import { ThemeApi } from '../api/ThemeApi'
import { TopicApi } from '../api/TopicApi'
import { ApplicationLoader } from './ApplicationLoader'
import { core, SITUATION_API, THEME_API, TOPIC_API } from './common-tokens'
import { DemoDataLoader, IDemoDataLoader } from './DemoDataLoader'
import { SituationDao, SituationRatingDao, ThemeDao, TopicDao } from '../dao/dao'
import { REQUEST_MANAGER } from '@airport/arrivals-n-departures'

export const SITUATION_DAO = core.token<SituationDao>({
    class: SituationDao,
    interface: 'SituationDao',
    token: 'SITUATION_DAO'
})
export const SITUATION_RATING_DAO = core.token<SituationRatingDao>({
    class: SituationRatingDao,
    interface: 'SituationRatingDao',
    token: 'SITUATION_RATING_DAO'
})
export const THEME_DAO = core.token<ThemeDao>({
    class: ThemeDao,
    interface: 'ThemeDao',
    token: 'THEME_DAO'
})
export const TOPIC_DAO = core.token<TopicDao>({
    class: TopicDao,
    interface: 'TopicDao',
    token: 'TOPIC_DAO'
})
SITUATION_API.setClass(SituationApi)
SITUATION_API.setDependencies({
    requestManager: REQUEST_MANAGER,
    situationDao: SITUATION_DAO,
    situationRatingDao: SITUATION_RATING_DAO
})
THEME_API.setClass(ThemeApi)
THEME_API.setDependencies({
    themeDao: THEME_DAO
})
TOPIC_API.setClass(TopicApi)
TOPIC_API.setDependencies({
    topicDao: TOPIC_DAO
})
export const DEMO_DATA_LOADER = core.token<IDemoDataLoader>({
    class: DemoDataLoader,
    interface: 'IDemoDataLoader',
    token: 'DEMO_DATA_LOADER'
})
DEMO_DATA_LOADER.setDependencies({
    themeDao: THEME_DAO
})
APPLICATION_LOADER.setClass(ApplicationLoader)

APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    demoDataLoader: DEMO_DATA_LOADER,
    terminalStore: TERMINAL_STORE,
})
