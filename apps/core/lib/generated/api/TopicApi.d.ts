import { Topic } from '../../ddl/Topic';
export declare class TopicApi {
    constructor();
    topicApi: TopicApi;
    findAll(): Promise<Topic[]>;
    getById(topicId: string): Promise<Topic>;
}
//# sourceMappingURL=TopicApi.d.ts.map