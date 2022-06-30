import { APPLICATION_LOADER } from '@airport/apron';
import { API_REGISTRY } from '@airport/check-in';
import { APPLICATION_INITIALIZER, TERMINAL_STORE } from '@airport/terminal-map';
import { SITUATION_API } from '@sapoto/core';
import { ApplicationLoader } from './ApplicationLoader';
import { main, REPLY_API } from './common-tokens';
import { ReplyDao } from '../dao/ReplyDao';
import { ReplyRatingDao } from '../dao/ReplyRatingDao';
import { SituationThreadDao } from '../dao/SituationThreadDao';
import { SITUATION_THREAD_API } from './common-tokens';
import { ReplyApi, SituationThreadApi } from '../api/api';
import { SITUATION_IDEA_API } from '@votecube/votecube';
export const REPLY_DAO = main.token({
    class: ReplyDao,
    interface: 'ReplyDao',
    token: 'REPLY_DAO'
});
export const REPLY_RATING_DAO = main.token({
    class: ReplyRatingDao,
    interface: 'ReplyRatingDao',
    token: 'REPLY_RATING_DAO'
});
export const SITUATION_THREAD_DAO = main.token({
    class: SituationThreadDao,
    interface: 'SituationThreadDao',
    token: 'SITUATION_THREAD_DAO'
});
SITUATION_THREAD_API.setClass(SituationThreadApi);
SITUATION_THREAD_API.setDependencies({
    situationApi: SITUATION_API,
    situationThreadDao: SITUATION_THREAD_DAO
});
REPLY_API.setClass(ReplyApi);
REPLY_API.setDependencies({
    situationIdeaApi: SITUATION_IDEA_API,
    replyDao: REPLY_DAO,
    replyRatingDao: REPLY_RATING_DAO,
    situationApi: SITUATION_API,
    situationThreadDao: SITUATION_THREAD_DAO,
});
APPLICATION_LOADER.setClass(ApplicationLoader);
APPLICATION_LOADER.setDependencies({
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    terminalStore: TERMINAL_STORE,
});
//# sourceMappingURL=runtime-tokens.js.map