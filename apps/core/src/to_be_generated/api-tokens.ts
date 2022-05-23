import { INTER_APP_API_CLIENT } from "@airport/ground-control";
import { SituationApi, ThemeApi, TopicApi } from "../generated/api/api";
import { core, SITUATION_API, THEME_API, TOPIC_API } from "./common-tokens";

core.autopilot = true
SITUATION_API.setClass(SituationApi)
SITUATION_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
THEME_API.setClass(ThemeApi)
THEME_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
TOPIC_API.setClass(TopicApi)
TOPIC_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
