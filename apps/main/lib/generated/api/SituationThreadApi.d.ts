import { SituationThread } from '../../ddl/SituationThread';
export declare class SituationThreadApi {
    constructor();
    situationThreadApi: SituationThreadApi;
    addSituationThread(situationThread: SituationThread): Promise<void>;
    findWithListingDetailsForATopic(topicUuId: string): Promise<SituationThread[]>;
    findById(situationThreadUuId: string): Promise<SituationThread>;
}
//# sourceMappingURL=SituationThreadApi.d.ts.map