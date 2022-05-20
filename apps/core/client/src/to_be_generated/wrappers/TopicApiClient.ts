import { RepositoryEntityId } from "@airport/air-traffic-control";
import { IOC } from "@airport/direction-indicator";
import { ITopic } from "../../generated/interfaces";
import { TOPIC_API } from "../tokens";

export interface ITopicApi {

    findAll(
    ): Promise<ITopic[]>

    getById(
        topicId: RepositoryEntityId
    ): Promise<ITopic>

}

export class TopicApiClient
    implements ITopicApi {

    async getById(
        topicId: RepositoryEntityId
    ): Promise<ITopic> {
        const topicApi = await IOC.get(TOPIC_API)

        return await topicApi.getById(topicId)
    }

    async findAll(
    ): Promise<ITopic[]> {
        const topicApi = await IOC.get(TOPIC_API)

        return await topicApi.findAll()
    }

}
