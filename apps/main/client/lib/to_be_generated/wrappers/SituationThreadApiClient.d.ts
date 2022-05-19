import { ISituationThread } from "../../generated/interfaces";
export interface ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
}
export declare class SituationThreadApiClient implements ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
}
//# sourceMappingURL=SituationThreadApiClient.d.ts.map