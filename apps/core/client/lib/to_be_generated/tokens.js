import { domain } from '@airport/direction-indicator';
export const core = domain('localhost:8100').app('@sapoto/core');
export const SITUATION_API = core.token({
    class: null,
    interface: 'ISituationApi',
    token: 'SITUATION_API'
});
export const THEME_API = core.token({
    class: null,
    interface: 'IThemeApi',
    token: 'THEME_API'
});
export const TOPIC_API = core.token({
    class: null,
    interface: 'ITopicApi',
    token: 'TOPIC_API'
});
//# sourceMappingURL=tokens.js.map