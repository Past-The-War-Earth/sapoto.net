import { IOC } from "@airport/direction-indicator";
import { TOPIC_API } from "../tokens";
export class TopicApiClient {
    async todo() {
        const topicApi = await IOC.get(TOPIC_API);
        // return await topicApi.todo()
    }
}
//# sourceMappingURL=TopicApiClient.js.map