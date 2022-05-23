import { SituationApi, ThemeApi, TopicApi } from "../generated/api/api";
import { core, SITUATION_API, THEME_API, TOPIC_API } from "./common-tokens";
core.autopilot = true;
SITUATION_API.setClass(SituationApi);
SITUATION_API.setDependencies({
    situationApi: SITUATION_API
});
THEME_API.setClass(ThemeApi);
THEME_API.setDependencies({
    themeApi: THEME_API
});
TOPIC_API.setClass(TopicApi);
TOPIC_API.setDependencies({
    topicApi: TOPIC_API
});
//# sourceMappingURL=api-tokens.js.map