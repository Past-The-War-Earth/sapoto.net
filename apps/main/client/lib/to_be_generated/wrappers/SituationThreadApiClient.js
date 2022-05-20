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
    async findById(situationThreadId) {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API);
        return await situationThreadApi.findById(situationThreadId);
    }
}
//# sourceMappingURL=SituationThreadApiClient.js.map