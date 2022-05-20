import { ISituationThread } from "../../generated/interfaces";
export interface ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: string): Promise<ISituationThread[]>;
    findById(situationThreadId: string): Promise<ISituationThread>;
}
export declare class SituationThreadApiClient implements ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topic: string): Promise<ISituationThread[]>;
    findById(situationThreadId: string): Promise<ISituationThread>;
}
//# sourceMappingURL=SituationThreadApiClient.d.ts.map