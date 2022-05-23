import { SituationThread } from '../../ddl/SituationThread';
export declare class SituationThreadApi {
    constructor();
    situationThreadApi: SituationThreadApi;
    addSituationThread(situationThread: SituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicId: string): Promise<SituationThread[]>;
    findById(situationThreadId: string): Promise<SituationThread>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map