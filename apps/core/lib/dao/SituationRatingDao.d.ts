import { IUser } from "@airport/travel-document-checkpoint";
import { BaseSituationRatingDao, IBaseSituationRatingDao, ISituationRating } from "../generated/generated";
import { RepositoryEntityId } from "@airport/air-traffic-control";
export interface ISituationRatingDao extends IBaseSituationRatingDao {
    findForSituationAndUser(situationId: RepositoryEntityId, user: IUser): Promise<ISituationRating>;
}
export declare class SituationRatingDao extends BaseSituationRatingDao implements ISituationRatingDao {
    findForSituationAndUser(situationId: RepositoryEntityId, user: IUser): Promise<ISituationRating>;
}
//# sourceMappingURL=SituationRatingDao.d.ts.map