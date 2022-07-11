import { Topic } from '@sapoto/core';
import { SituationThread } from '../../ddl/SituationThread';
export declare class SituationThreadApi {
    constructor();
    situationThreadApi: SituationThreadApi;
    addSituationThread(situationThread: SituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: string | Topic): Promise<SituationThread[]>;
    findById(situationThreadId: string | SituationThread): Promise<SituationThread>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map