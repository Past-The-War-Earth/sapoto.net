import { APPLICATION_STORE } from '@airport/apron';
import { API_REGISTRY } from '@airport/check-in';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
import { APPLICATION_INITIALIZER } from '../../../../../../AIR/AIRport/apis/terminal-map/lib';
import { SituationApi } from '../api/SituationApi';
import { ThemeApi } from '../api/ThemeApi';
import { TopicApi } from '../api/TopicApi';
import { ApplicationLoader } from './ApplicationLoader';
import { core, SITUATION_API, THEME_API, TOPIC_API } from './common-tokens';
import { DemoDataLoader } from './DemoDataLoader';
import { SituationDao, SituationRatingDao, ThemeDao, TopicDao } from './runtime-index';
export const SITUATION_DAO = core.token({
    class: SituationDao,
    interface: 'ISituationDao',
    token: 'SITUATION_DAO'
});
export const SITUATION_RATING_DAO = core.token({
    class: SituationRatingDao,
    interface: 'ISituationRatingDao',
    token: 'SITUATION_RATING_DAO'
});
export const THEME_DAO = core.token({
    class: ThemeDao,
    interface: 'IThemeDao',
    token: 'THEME_DAO'
});
export const TOPIC_DAO = core.token({
    class: TopicDao,
    interface: 'ITopicDao',
    token: 'TOPIC_DAO'
});
DEPENDENCY_INJECTION.set(SITUATION_API, SituationApi);
THEME_API.setDependencies({
    situtaionDao: SITUATION_DAO,
    situtaionRatingDao: SITUATION_RATING_DAO,
});
DEPENDENCY_INJECTION.set(THEME_API, ThemeApi);
THEME_API.setDependencies({
    themeDao: THEME_DAO
});
DEPENDENCY_INJECTION.set(TOPIC_API, TopicApi);
export const DEMO_DATA_LOADER = core.token({
    class: DemoDataLoader,
    interface: 'IDemoDataLoader',
    token: 'DEMO_DATA_LOADER'
});
export const APPLICATION_LOADER = core.token({
    class: ApplicationLoader,
    interface: 'IApplicationLoader',
    token: 'APPLICATION_LOADER'
});
APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    applicationStore: APPLICATION_STORE,
    apiRegistry: API_REGISTRY,
    demoDataLoader: DEMO_DATA_LOADER
});
//# sourceMappingURL=runtime-tokens.js.map