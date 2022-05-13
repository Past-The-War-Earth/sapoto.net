import type { IUser } from "@airport/travel-document-checkpoint-client";
import { ISituation, ITopic, ITheme } from "../../generated/interfaces";
import { ISituationRating } from "../../generated/situationrating";
export interface ISituationApi {
    save(situation: ISituation): Promise<void>;
    rateSituation(situation: ISituation, importanceRating: 1 | 2 | 3 | 4 | 5, urgencyRating: 1 | 2 | 3 | 4 | 5, user: IUser): Promise<ISituationRating>;
    findWithListingDetailsForATopic(topic: ITopic): Promise<ISituation[]>;
    findWithListingDetailsForATheme(theme: ITheme): Promise<ISituation[]>;
    getNewSituation(): Promise<ISituation>;
}
export declare class SituationApiClient implements ISituationApi {
    save(situation: ISituation): Promise<void>;
    rateSituation(situation: ISituation, importanceRating: 1 | 2 | 3 | 4 | 5, urgencyRating: 1 | 2 | 3 | 4 | 5, user: IUser): Promise<ISituationRating>;
    findWithListingDetailsForATopic(topic: ITopic): Promise<ISituation[]>;
    findWithListingDetailsForATheme(theme: ITheme): Promise<ISituation[]>;
    getNewSituation(): Promise<ISituation>;
}
//# sourceMappingURL=SituationApiClient.d.ts.map