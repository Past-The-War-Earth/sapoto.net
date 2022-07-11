import { Topic } from '../../ddl/Topic';
export declare class TopicApi {
    constructor();
    topicApi: TopicApi;
    findAll(): Promise<Topic[]>;
    findOne(topicId: string | Topic): Promise<Topic>;
}
//# sourceMappingURL=TopicApi.d.ts.map