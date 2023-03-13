import { APPLICATION_INITIALIZER, TerminalStore } from '@airport/terminal-map'
import { ApplicationLoader } from './ApplicationLoader'
import { ReplyDao } from '../dao/ReplyDao'
import { ReplyRatingDao } from '../dao/ReplyRatingDao'
import { SituationThreadDao } from '../dao/SituationThreadDao'
import { ReplyApi, SituationThreadApi } from '../api/api'
import { ReplyDvo } from '../dvo/ReplyDvo'
import { ReplyRatingDvo } from '../dvo/ReplyRatingDvo'
import { SituationThreadDvo } from '../dvo/SituationThreadDvo'
import { app } from '@airport/direction-indicator'
import { application } from './app-declaration'
import { API_REGISTRY } from '@airport/air-traffic-control'

export const sapoto_main = app(application)

sapoto_main.register(
    ReplyApi,
    ReplyDao,
    ReplyDvo,
    ReplyRatingDao,
    ReplyRatingDvo,
    SituationThreadApi,
    SituationThreadDao,
    SituationThreadDvo
)

sapoto_main.setDependencies(SituationThreadApi, {
    situationApi: SITUATION_API,
    situationThreadDao: SituationThreadDao,
    situationThreadDvo: SituationThreadDvo
})

sapoto_main.setDependencies(ReplyApi, {
    situationIdeaApi: SITUATION_IDEA_API,
    replyDao: ReplyDao,
    replyDvo: ReplyDvo,
    replyRatingDao: ReplyRatingDao,
    replyRatingDvo: ReplyRatingDvo,
    situationApi: SITUATION_API,
    situationThreadDao: SituationThreadDao,
})

sapoto_main.setDependencies(ApplicationLoader, {
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    terminalStore: TerminalStore,
})
