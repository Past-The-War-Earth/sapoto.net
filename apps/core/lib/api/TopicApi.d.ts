import { TopicDao } from "../dao/TopicDao";
import { Topic } from "../ddl/Topic";
export declare class TopicApi {
    topicDao: TopicDao;
    findAll(): Promise<Topic[]>;
    findByUuId(topicUuId: string): Promise<Topic>;
}
//# sourceMappingURL=TopicApi.d.ts.map