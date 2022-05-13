import { IInterAppAPIClient } from "@airport/ground-control";
import { ISituation, ISituationRating, ITheme, ITopic } from "../../generated/interfaces";
import { IUser } from "@airport/travel-document-checkpoint";
export declare class SituationApi {
    interAppApiClient: IInterAppAPIClient;
    save(situation: ISituation): Promise<void>;
    rateSituation(situation: ISituation, importanceRating: 1 | 2 | 3 | 4 | 5, urgencyRating: 1 | 2 | 3 | 4 | 5, user: IUser): Promise<ISituationRating>;
    findWithListingDetailsForATopic(topic: ITopic): Promise<ISituation[]>;
    findWithListingDetailsForATheme(theme: ITheme): Promise<ISituation[]>;
    getNewSituation(): Promise<ISituation>;
}
//# sourceMappingURL=SituationApi.d.ts.map