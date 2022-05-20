import { Inject, Injected } from "@airport/direction-indicator"
import { IInterAppAPIClient } from "@airport/ground-control"
import { ITopic } from "../../generated/interfaces"
import { TOPIC_API } from "../common-tokens"

@Injected()
export class TopicApi {

    @Inject()
    interAppApiClient: IInterAppAPIClient


    async findAll(): Promise<ITopic[]> {
        return await this.interAppApiClient.invokeApiMethod(
            TOPIC_API, 'findAll', [])
    }

    async getById(
        topicId: string
    ): Promise<ITopic> {
        return await this.interAppApiClient.invokeApiMethod(
            TOPIC_API, 'getById', [topicId])
    }

}