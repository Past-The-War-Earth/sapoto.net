import { IOC } from "@airport/direction-indicator";
import { SITUATION_THREAD_API } from "../tokens";
export class SituationThreadApiClient {
    async addSituationThread(situationThread) {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API);
        await situationThreadApi.addSituationThread(situationThread);
    }
    async findWithListingDetailsForATopic(topic) {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API);
        return await situationThreadApi.findWithListingDetailsForATopic(topic);
    }
}
//# sourceMappingURL=SituationThreadApiClient.js.map