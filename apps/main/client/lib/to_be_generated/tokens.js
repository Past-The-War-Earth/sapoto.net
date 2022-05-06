import { app } from '@sapoto/dependency-injection';
export const main = app('main');
export const SITUATION_THREAD_API = main.token({
    class: null,
    interface: 'ISituationApi',
    token: 'SITUATION_API'
});
//# sourceMappingURL=tokens.js.map