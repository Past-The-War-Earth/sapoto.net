import { APPLICATION_INITIALIZER, APPLICATION_LOADER, TerminalStore } from '@airport/terminal-map'
import { SituationApi } from '../api/SituationApi'
import { ThemeApi } from '../api/ThemeApi'
import { TopicApi } from '../api/TopicApi'
import { ApplicationLoader } from './ApplicationLoader'
import { DemoDataLoader } from './DemoDataLoader'
import { SituationDao, SituationRatingDao, ThemeDao, TopicDao } from '../dao/dao'
import { SituationDvo } from '../dvo/SituationDvo'
import { SituationRatingDvo } from '../dvo/SituationRatingDvo'
import { app } from '@airport/direction-indicator'
import { application } from './app-declaration'
import { RequestManager } from '@airport/web-tower'
import { API_REGISTRY } from '@airport/air-traffic-control'

export const sapoto_core = app(application)

sapoto_core.register(
    DemoDataLoader,
    SituationDao,
    SituationDvo,
    SituationRatingDao,
    SituationRatingDvo,
    ThemeApi,
    ThemeDao,
    TopicApi,
    TopicDao
)

sapoto_core.setDependencies(SituationApi, {
    requestManager: RequestManager,
    situationDao: SituationDao,
    situationDvo: SituationDvo,
    situationRatingDao: SituationRatingDao,
    situationRatingDvo: SituationRatingDvo
})

sapoto_core.setDependencies(ThemeApi, {
    themeDao: ThemeDao
})

sapoto_core.setDependencies(TopicApi, {
    topicDao: TopicDao
})

sapoto_core.setDependencies(DemoDataLoader, {
    themeDao: ThemeDao
})

APPLICATION_LOADER.setClass(ApplicationLoader)
APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    demoDataLoader: DemoDataLoader,
    terminalStore: TerminalStore,
})
