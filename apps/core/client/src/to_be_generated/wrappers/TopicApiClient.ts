import { IOC } from "@airport/direction-indicator";
import { TOPIC_API } from "../tokens";

export interface ITopicApi {

}

export class TopicApiClient
    implements ITopicApi {

    async todo(
    ): Promise<void> {
        const topicApi = await IOC.get(TOPIC_API)

        // return await topicApi.todo()
    }

}
