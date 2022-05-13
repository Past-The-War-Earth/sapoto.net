import { ITopic } from "../../generated/interfaces";
export interface ITopicApi {
    findAll(): Promise<ITopic[]>;
}
export declare class TopicApiClient implements ITopicApi {
    findAll(): Promise<ITopic[]>;
}
//# sourceMappingURL=TopicApiClient.d.ts.map