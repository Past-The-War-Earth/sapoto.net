import { IOC } from "@airport/direction-indicator";
import { TOPIC_API } from "../tokens";
export class TopicApiClient {
    async findAll() {
        const topicApi = await IOC.get(TOPIC_API);
        return await topicApi.findAll();
    }
}
//# sourceMappingURL=TopicApiClient.js.map