import { ReplyApi, SituationThreadApi } from "../generated/api/api";
import { main, REPLY_API, SITUATION_THREAD_API } from "./common-tokens";

main.autopilot = true

SITUATION_THREAD_API.setClass(SituationThreadApi)
SITUATION_THREAD_API.setDependencies({
    situationThreadApi: SITUATION_THREAD_API
})
REPLY_API.setClass(ReplyApi)
REPLY_API.setDependencies({
    replyApi: REPLY_API
})
