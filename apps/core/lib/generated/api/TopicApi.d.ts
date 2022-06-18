import { Topic } from '../../ddl/Topic';
export declare class TopicApi {
    constructor();
    topicApi: TopicApi;
    findAll(): Promise<Topic[]>;
    findByUuId(topicUuId: string): Promise<Topic>;
}
//# sourceMappingURL=TopicApi.d.ts.map