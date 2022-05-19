import { IOC } from "@airport/direction-indicator";
import { SITUATION_THREAD_API } from "../tokens";
export class SituationThreadApiClient {
    async addSituationThread(situationThread) {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API);
        await situationThreadApi.addSituationThread(situationThread);
    }
}
//# sourceMappingURL=SituationThreadApiClient.js.map