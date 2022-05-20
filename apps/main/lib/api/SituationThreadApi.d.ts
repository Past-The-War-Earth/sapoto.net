import { ISituationThread } from "../generated/generated";
import { ISituation, SituationApi } from "@sapoto/core";
import { ISituationThreadDao } from "../dao/SituationThreadDao";
export interface ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: string): Promise<ISituation[]>;
}
export declare class SituationThreadApi implements ISituationThreadApi {
    situationApi: SituationApi;
    situationThreadDao: ISituationThreadDao;
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: string): Promise<ISituation[]>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map