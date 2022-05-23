import { User } from "@airport/travel-document-checkpoint";
import { BaseSituationRatingDao } from "../generated/generated";
import { SituationRating } from "../ddl/SituationRating";
import { RepositoryEntityId } from "@airport/aviation-communication";
export declare class SituationRatingDao extends BaseSituationRatingDao {
    findForSituationAndUser(situationId: string | RepositoryEntityId, user: User): Promise<SituationRating>;
}
//# sourceMappingURL=SituationRatingDao.d.ts.map