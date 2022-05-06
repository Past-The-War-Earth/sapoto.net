import { app } from '@sapoto/dependency-injection';
export const core = app('core');
export const SITUATION_API = core.token({
    class: null,
    interface: 'ISituationApi',
    token: 'ISituationApi'
});
export const THEME_API = core.token({
    class: null,
    interface: 'ISituationApi',
    token: 'IThemeApi'
});
export const TOPIC_API = core.token({
    class: null,
    interface: 'ITopicApi',
    token: 'TOPIC_API'
});
//# sourceMappingURL=common-tokens.js.map