import { app } from '@sapoto/dependency-injection';
export const main = app('main');
export const SITUATION_THREAD_API = main.token({
    class: null,
    interface: 'ISituationThreadApi',
    token: 'SITUATION_THREAD_API'
});
//# sourceMappingURL=common-tokens.js.map