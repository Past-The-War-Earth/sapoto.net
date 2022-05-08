import { APPLICATION_LOADER, APPLICATION_STORE, IApplicationLoader } from '@airport/apron'
import { API_REGISTRY } from '@airport/check-in'
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator'
import { APPLICATION_INITIALIZER } from '@airport/terminal-map'
import { SituationApi } from '../api/SituationApi'
import { ThemeApi } from '../api/ThemeApi'
import { TopicApi } from '../api/TopicApi'
import { ApplicationLoader } from './ApplicationLoader'
import { core, SITUATION_API, THEME_API, TOPIC_API } from './common-tokens'
import { DemoDataLoader, IDemoDataLoader } from './DemoDataLoader'
import { ISituationDao, ISituationRatingDao, IThemeDao, ITopicDao, SituationDao, SituationRatingDao, ThemeDao, TopicDao } from './runtime-index'

export const SITUATION_DAO = core.token<ISituationDao>({
    class: SituationDao,
    interface: 'ISituationDao',
    token: 'SITUATION_DAO'
})
export const SITUATION_RATING_DAO = core.token<ISituationRatingDao>({
    class: SituationRatingDao,
    interface: 'ISituationRatingDao',
    token: 'SITUATION_RATING_DAO'
})
export const THEME_DAO = core.token<IThemeDao>({
    class: ThemeDao,
    interface: 'IThemeDao',
    token: 'THEME_DAO'
})
export const TOPIC_DAO = core.token<ITopicDao>({
    class: TopicDao,
    interface: 'ITopicDao',
    token: 'TOPIC_DAO'
})
SITUATION_API.setClass(SituationApi)
THEME_API.setDependencies({
    situtaionDao: SITUATION_DAO,
    situtaionRatingDao: SITUATION_RATING_DAO,
})
THEME_API.setClass(ThemeApi)
THEME_API.setDependencies({
    themeDao: THEME_DAO
})
TOPIC_API.setClass(TopicApi)
export const DEMO_DATA_LOADER = core.token<IDemoDataLoader>({
    class: DemoDataLoader,
    interface: 'IDemoDataLoader',
    token: 'DEMO_DATA_LOADER'
})
APPLICATION_LOADER.setClass(ApplicationLoader)

APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    applicationStore: APPLICATION_STORE,
    apiRegistry: API_REGISTRY,
    demoDataLoader: DEMO_DATA_LOADER
})
