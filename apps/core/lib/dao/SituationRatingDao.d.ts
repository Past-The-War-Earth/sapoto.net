import { BaseSituationRatingDao } from "../generated/generated";
import { SituationRating } from "../ddl/SituationRating";
import { AirEntityId } from "@airport/aviation-communication";
import { UserAccount } from "@airport/travel-document-checkpoint";
export declare class SituationRatingDao extends BaseSituationRatingDao {
    findForSituationAndUser(situationUuId: string | AirEntityId, user: UserAccount): Promise<SituationRating>;
}
//# sourceMappingURL=SituationRatingDao.d.ts.map