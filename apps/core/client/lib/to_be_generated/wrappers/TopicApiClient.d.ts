import { ITopic } from "../../generated/interfaces";
export interface ITopicApi {
    findAll(): Promise<ITopic[]>;
    getById(topicId: ITopic): Promise<ITopic>;
}
export declare class TopicApiClient implements ITopicApi {
    getById(topicId: ITopic): Promise<ITopic>;
    findAll(): Promise<ITopic[]>;
}
//# sourceMappingURL=TopicApiClient.d.ts.map