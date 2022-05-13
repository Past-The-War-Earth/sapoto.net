import { APPLICATION_LOADER } from '@airport/apron';
import { API_REGISTRY } from '@airport/check-in';
import { APPLICATION_INITIALIZER, TERMINAL_STORE } from '@airport/terminal-map';
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
SITUATION_API.setClass(SituationApi);
SITUATION_API.setDependencies({
    situationDao: SITUATION_DAO,
    situationRatingDao: SITUATION_RATING_DAO
});
THEME_API.setClass(ThemeApi);
THEME_API.setDependencies({
    themeDao: THEME_DAO
});
TOPIC_API.setClass(TopicApi);
TOPIC_API.setDependencies({
    topicDao: TOPIC_DAO
});
export const DEMO_DATA_LOADER = core.token({
    class: DemoDataLoader,
    interface: 'IDemoDataLoader',
    token: 'DEMO_DATA_LOADER'
});
DEMO_DATA_LOADER.setDependencies({
    themeDao: THEME_DAO
});
APPLICATION_LOADER.setClass(ApplicationLoader);
APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    demoDataLoader: DEMO_DATA_LOADER,
    terminalStore: TERMINAL_STORE,
});
//# sourceMappingURL=runtime-tokens.js.map