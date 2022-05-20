import { IInterAppAPIClient } from "@airport/ground-control";
import { ISituationThread } from "../../generated/interfaces";
import { ITopic } from "@sapoto/core";
export interface ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topic: ITopic): Promise<ISituationThread[]>;
}
export declare class SituationThreadApi {
    interAppApiClient: IInterAppAPIClient;
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topic: ITopic): Promise<ISituationThread[]>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map