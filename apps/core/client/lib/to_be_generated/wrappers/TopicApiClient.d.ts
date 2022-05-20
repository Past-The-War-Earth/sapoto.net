import { RepositoryEntityId } from "@airport/air-traffic-control";
import { ITopic } from "../../generated/interfaces";
export interface ITopicApi {
    findAll(): Promise<ITopic[]>;
    getById(topicId: RepositoryEntityId): Promise<ITopic>;
}
export declare class TopicApiClient implements ITopicApi {
    getById(topicId: RepositoryEntityId): Promise<ITopic>;
    findAll(): Promise<ITopic[]>;
}
//# sourceMappingURL=TopicApiClient.d.ts.map