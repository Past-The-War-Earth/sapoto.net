import { QuestionTypeApi } from '../generated/api/QuestionTypeApi';
import { ReplyApi } from '../generated/api/ReplyApi';
import { SituationThreadApi } from '../generated/api/SituationThreadApi';
import { application } from './app-declaration';

export * from '../generated/api/api'

export * from '../ddl/ddl';
export * from '../generated/qApplication';
export * from '../generated/qInterfaces';
export * from '../generated/vInterfaces';
export * from './app-declaration';

for (let apiStub of [
    QuestionTypeApi,
    ReplyApi,
    SituationThreadApi
]) {
    (apiStub as any).application = application
}
