import { RepositoryEntityId } from "@airport/air-traffic-control";
import { ITopic } from "@sapoto/core";
import { ISituationThread } from "../../generated/interfaces";
export interface ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: RepositoryEntityId): Promise<ISituationThread[]>;
}
export declare class SituationThreadApiClient implements ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topic: ITopic): Promise<ISituationThread[]>;
}
//# sourceMappingURL=SituationThreadApiClient.d.ts.map