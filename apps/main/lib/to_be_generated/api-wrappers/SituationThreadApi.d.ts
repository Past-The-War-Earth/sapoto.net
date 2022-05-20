import { IInterAppAPIClient } from "@airport/ground-control";
import { ISituationThread } from "../../generated/interfaces";
export interface ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: string): Promise<ISituationThread[]>;
}
export declare class SituationThreadApi {
    interAppApiClient: IInterAppAPIClient;
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: string): Promise<ISituationThread[]>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map