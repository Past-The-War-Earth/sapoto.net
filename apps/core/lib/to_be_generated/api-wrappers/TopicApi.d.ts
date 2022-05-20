import { IInterAppAPIClient } from "@airport/ground-control";
import { ITopic } from "../../generated/interfaces";
export declare class TopicApi {
    interAppApiClient: IInterAppAPIClient;
    findAll(): Promise<ITopic[]>;
    getById(topicId: string): Promise<ITopic>;
}
//# sourceMappingURL=TopicApi.d.ts.map