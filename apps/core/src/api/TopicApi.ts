import { DI } from "@airport/di";
import { TOPIC_API } from "../tokens";

export interface ITopicApi {

}

export class TopicApi
    implements ITopicApi {

}
DI.set(TOPIC_API, TopicApi)
