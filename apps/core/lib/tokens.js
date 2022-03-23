import { app } from '@sapoto/dependency-injection';
export const core = app('core');
export const SITUATION_API = core.token('ISituationApi');
export const THEME_API = core.token('IThemeApi');
export const TOPIC_API = core.token('ITopicApi');
//# sourceMappingURL=tokens.js.map