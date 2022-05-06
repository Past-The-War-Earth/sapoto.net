import { DEPENDENCY_INJECTION } from "@airport/direction-indicator";
import { INTER_APP_API_CLIENT } from "@airport/ground-control";
import { SituationThreadApi } from "./api-wrappers/api-wrappers";
import { SITUATION_THREAD_API } from "./common-tokens";
DEPENDENCY_INJECTION.set(SITUATION_THREAD_API, SituationThreadApi);
SITUATION_THREAD_API.setDependencies({
    interAppApiClient: INTER_APP_API_CLIENT
});
//# sourceMappingURL=api-tokens.js.map