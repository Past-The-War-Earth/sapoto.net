import { domain } from '@airport/direction-indicator';
// export const main = app('main')
export const main = domain('localhost:8080').app('@sapoto/main');
main.autopilot = true;
export const SITUATION_THREAD_API = main.token({
    class: null,
    interface: 'ISituationThreadApi',
    token: 'SITUATION_THREAD_API'
});
//# sourceMappingURL=tokens.js.map