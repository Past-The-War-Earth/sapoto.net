import { ITopicDao } from "../dao/TopicDao";
import { ITopic } from "../generated/topic";
export interface ITopicApi {
    findAll(): Promise<ITopic[]>;
}
export declare class TopicApi implements ITopicApi {
    topicDao: ITopicDao;
    findAll(): Promise<ITopic[]>;
}
//# sourceMappingURL=TopicApi.d.ts.map