import { INTER_APP_API_CLIENT } from "@airport/ground-control";
import { ReplyApi, SituationThreadApi } from "../generated/api/api";
import { main, REPLY_API, SITUATION_THREAD_API } from "./common-tokens";

main.autopilot = true

SITUATION_THREAD_API.setClass(SituationThreadApi)
SITUATION_THREAD_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
REPLY_API.setClass(ReplyApi)
SITUATION_THREAD_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
})
