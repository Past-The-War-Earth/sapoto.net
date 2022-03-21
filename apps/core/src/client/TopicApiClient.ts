import { IOC } from "@airport/di";
import { TOPIC_API } from "../tokens";

export class TopicApiClient {

    async todo(
    ): Promise<void> {
        const topicApi = await IOC.get(TOPIC_API)

        // return await topicApi.todo()
    }

}
