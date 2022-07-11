import { SituationApi, Topic } from "@sapoto/core";
import { SituationThreadDao } from "../dao/SituationThreadDao";
import { SituationThread } from "../ddl/SituationThread";
export declare class SituationThreadApi {
    situationApi: SituationApi;
    situationThreadDao: SituationThreadDao;
    addSituationThread(situationThread: SituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: string | Topic): Promise<SituationThread[]>;
    findById(situationThreadId: string | SituationThread): Promise<SituationThread>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map