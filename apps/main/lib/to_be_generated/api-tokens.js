import { INTER_APP_API_CLIENT } from "@airport/ground-control";
import { SituationThreadApi } from "./api-wrappers/api-wrappers";
import { SITUATION_THREAD_API } from "./common-tokens";
SITUATION_THREAD_API.setClass(SituationThreadApi);
SITUATION_THREAD_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
//# sourceMappingURL=api-tokens.js.map