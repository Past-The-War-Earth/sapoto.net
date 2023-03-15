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
import { SituationApi } from '@sapoto/core'
import { SituationIdeaApi } from '@votecube/votecube'
import { QuestionTypeDao } from '../dao/QuestionTypeDao'
import { QuestionTypeApi } from '../api/QuestionTypeApi'

export const sapoto_main = app(application)

sapoto_main.register(
    QuestionTypeApi,
    QuestionTypeDao,
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
    situationApi: SituationApi,
    situationThreadDao: SituationThreadDao,
    situationThreadDvo: SituationThreadDvo
})

sapoto_main.setDependencies(QuestionTypeApi, {
    questionTypeDao: QuestionTypeDao
})

sapoto_main.setDependencies(ReplyApi, {
    situationIdeaApi: SituationIdeaApi,
    replyDao: ReplyDao,
    replyDvo: ReplyDvo,
    replyRatingDao: ReplyRatingDao,
    replyRatingDvo: ReplyRatingDvo,
    situationApi: SituationApi,
    situationThreadDao: SituationThreadDao,
})

sapoto_main.setDependencies(ApplicationLoader, {
    applicationInitializer: APPLICATION_INITIALIZER,
    apiRegistry: API_REGISTRY,
    terminalStore: TerminalStore,
})
