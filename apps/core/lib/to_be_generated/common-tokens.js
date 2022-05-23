import { app } from '@sapoto/dependency-injection';
export const core = app('@sapoto/core');
export const SITUATION_API = core.token({
    class: null,
    interface: 'SituationApi',
    token: 'SITUATION_API'
});
export const THEME_API = core.token({
    class: null,
    interface: 'ThemeApi',
    token: 'THEME_API'
});
export const TOPIC_API = core.token({
    class: null,
    interface: 'TopicApi',
    token: 'TOPIC_API'
});
//# sourceMappingURL=common-tokens.js.map