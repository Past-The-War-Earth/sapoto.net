import { IUser } from "@airport/travel-document-checkpoint";
import { BaseSituationRatingDao, IBaseSituationRatingDao, ISituation, ISituationRating } from "../generated/generated";
export interface ISituationRatingDao extends IBaseSituationRatingDao {
    findForSituationAndUser(situation: ISituation, user: IUser): Promise<ISituationRating>;
}
export declare class SituationRatingDao extends BaseSituationRatingDao implements ISituationRatingDao {
    findForSituationAndUser(situation: ISituation, user: IUser): Promise<ISituationRating>;
}
//# sourceMappingURL=SituationRatingDao.d.ts.map