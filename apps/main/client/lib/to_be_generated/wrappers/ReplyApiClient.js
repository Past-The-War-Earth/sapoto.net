import { IOC } from "@airport/direction-indicator";
import { REPLY_API } from "../tokens";
export class ReplyApi {
    async addReply(reply) {
        const replyApi = await IOC.get(REPLY_API);
        await replyApi.addReply(reply);
    }
    async getRepliesForSituationThread(situationThreadId) {
        const replyApi = await IOC.get(REPLY_API);
        return await replyApi.getRepliesForSituationThread(situationThreadId);
    }
    async addIdea(reply, ideaSituation) {
        const replyApi = await IOC.get(REPLY_API);
        await replyApi.addIdea(reply, ideaSituation);
    }
    async rateReply(replyRating) {
        const replyApi = await IOC.get(REPLY_API);
        await replyApi.rateReply(replyRating);
    }
    async addReplyType(reply, type) {
        const replyApi = await IOC.get(REPLY_API);
        await replyApi.addReplyType(reply, type);
    }
}
//# sourceMappingURL=ReplyApiClient.js.map