import { DEPENDENCY_INJECTION } from "@airport/direction-indicator";
import { INTER_APP_API_CLIENT } from "@airport/ground-control";
import { SituationApi, ThemeApi, TopicApi } from "./api-wrappers/api-wrappers";
import { SITUATION_API, THEME_API, TOPIC_API } from "./common-tokens";

DEPENDENCY_INJECTION.set(SITUATION_API, SituationApi)
SITUATION_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
DEPENDENCY_INJECTION.set(THEME_API, ThemeApi)
THEME_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
DEPENDENCY_INJECTION.set(TOPIC_API, TopicApi)
TOPIC_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
