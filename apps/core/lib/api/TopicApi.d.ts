import { RepositoryEntityId } from "@airport/air-traffic-control";
import { ITopicDao } from "../dao/TopicDao";
import { ITopic } from "../generated/topic";
export interface ITopicApi {
    findAll(): Promise<ITopic[]>;
    getById(topicId: ITopic): Promise<ITopic>;
}
export declare class TopicApi implements ITopicApi {
    topicDao: ITopicDao;
    findAll(): Promise<ITopic[]>;
    getById(topicId: RepositoryEntityId): Promise<ITopic>;
}
//# sourceMappingURL=TopicApi.d.ts.map