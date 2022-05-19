import { ISituationThread } from "../generated/generated";
import { SituationApi } from "@sapoto/core";
import { ISituationThreadDao } from "../dao/SituationThreadDao";
export interface ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
}
export declare class SituationThreadApi implements ISituationThreadApi {
    situationApi: SituationApi;
    situationThreadDao: ISituationThreadDao;
    addSituationThread(situationThread: ISituationThread): Promise<void>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map