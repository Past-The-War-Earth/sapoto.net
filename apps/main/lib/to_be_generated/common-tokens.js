import { domain } from '@airport/direction-indicator';
//export const main = app('main')
export const main = domain('localhost:8080').app('@sapoto/main');
export const SITUATION_THREAD_API = main.token({
    class: null,
    interface: 'ISituationThreadApi',
    token: 'SITUATION_THREAD_API'
});
export const REPLY_API = main.token({
    class: null,
    interface: 'IReplyApi',
    token: 'REPLY_API'
});
//# sourceMappingURL=common-tokens.js.map