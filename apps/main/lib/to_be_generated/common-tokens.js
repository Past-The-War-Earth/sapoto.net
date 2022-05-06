import { app } from '@sapoto/dependency-injection';
export const votecube = app('main');
export const SITUATION_THREAD_API = votecube.token({
    class: null,
    interface: 'ISituationThreadApi',
    token: 'SITUATION_THREAD_API'
});
//# sourceMappingURL=common-tokens.js.map