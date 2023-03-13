import { SituationApi } from '../generated/api/SituationApi';
import { ThemeApi } from '../generated/api/ThemeApi';
import { TopicApi } from '../generated/api/TopicApi';
import { application } from './app-declaration';

export * from '../generated/api/api'

export * from '../ddl/ddl';
export * from '../generated/qApplication';
export * from '../generated/qInterfaces';
export * from '../generated/vInterfaces';
export * from './app-declaration';

for (let apiStub of [
    SituationApi,
    ThemeApi,
    TopicApi
]) {
    (apiStub as any).application = application
}
