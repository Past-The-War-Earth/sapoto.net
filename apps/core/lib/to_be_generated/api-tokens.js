import { INTER_APP_API_CLIENT } from "@airport/ground-control";
import { SituationApi, ThemeApi, TopicApi } from "./api-wrappers/api-wrappers";
import { SITUATION_API, THEME_API, TOPIC_API } from "./common-tokens";
SITUATION_API.setClass(SituationApi);
SITUATION_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
THEME_API.setClass(ThemeApi);
THEME_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
TOPIC_API.setClass(TopicApi);
TOPIC_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
//# sourceMappingURL=api-tokens.js.map