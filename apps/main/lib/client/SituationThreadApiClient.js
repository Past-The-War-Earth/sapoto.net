import { IOC } from "@airport/di";
import { SITUATION_THREAD_API } from "../tokens";
export class SituationThreadApiClient {
    async addSituationThread(situationThread) {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API);
        await situationThreadApi.addSituationThread(situationThread);
    }
    async addReply(reply) {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API);
        await situationThreadApi.addReply(reply);
    }
    async addIdea(reply, ideaSituation) {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API);
        await situationThreadApi.addIdea(reply, ideaSituation);
    }
    async rateReply(replyRating) {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API);
        await situationThreadApi.rateReply(replyRating);
    }
    async addReplyType(reply, type) {
        const situationThreadApi = await IOC.get(SITUATION_THREAD_API);
        await situationThreadApi.addReplyType(reply, type);
    }
}
//# sourceMappingURL=SituationThreadApiClient.js.map