import { IUser } from "@airport/travel-document-checkpoint";
import { BaseSituationRatingDao, IBaseSituationRatingDao, ISituationRating } from "../generated/generated";
import { RepositoryEntityId } from "@airport/aviation-communication";
export interface ISituationRatingDao extends IBaseSituationRatingDao {
    findForSituationAndUser(situationId: string | RepositoryEntityId, user: IUser): Promise<ISituationRating>;
}
export declare class SituationRatingDao extends BaseSituationRatingDao implements ISituationRatingDao {
    findForSituationAndUser(situationId: string | RepositoryEntityId, user: IUser): Promise<ISituationRating>;
}
//# sourceMappingURL=SituationRatingDao.d.ts.map