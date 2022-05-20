import { ISituationThread } from "../generated/generated";
import { ISituation, SituationApi } from "@sapoto/core";
import { ISituationThreadDao } from "../dao/SituationThreadDao";
import { RepositoryEntityId } from "@airport/air-traffic-control";
export interface ISituationThreadApi {
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: RepositoryEntityId): Promise<ISituation[]>;
}
export declare class SituationThreadApi implements ISituationThreadApi {
    situationApi: SituationApi;
    situationThreadDao: ISituationThreadDao;
    addSituationThread(situationThread: ISituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: RepositoryEntityId): Promise<ISituation[]>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map