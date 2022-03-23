import { IUser } from "@airport/travel-document-checkpoint";
import { ISituation, ISituationRating } from "../generated/generated";
export interface ISituationApi {
    save(situation: ISituation): Promise<void>;
    rateSituation(situation: ISituation, importanceRating: 1 | 2 | 3 | 4 | 5, urgencyRating: 1 | 2 | 3 | 4 | 5, user: IUser): Promise<ISituationRating>;
}
export declare class SituationApi implements ISituationApi {
    save(situation: ISituation): Promise<void>;
    rateSituation(situation: ISituation, importanceRating: 1 | 2 | 3 | 4 | 5, urgencyRating: 1 | 2 | 3 | 4 | 5, user: IUser): Promise<ISituationRating>;
}
//# sourceMappingURL=SituationApi.d.ts.map