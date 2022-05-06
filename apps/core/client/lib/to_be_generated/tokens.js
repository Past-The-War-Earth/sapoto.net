import { app } from '@sapoto/dependency-injection';
export const core = app('core');
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