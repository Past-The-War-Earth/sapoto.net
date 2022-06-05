import { IdeaUrgencyRating } from "../ddl/IdeaUrgencyRating";
import { BaseIdeaUrgencyRatingDao } from "../generated/baseDaos";
export declare class IdeaUrgencyRatingDao extends BaseIdeaUrgencyRatingDao {
    findAllForUserAndSituationThread(userId: string, situationThreadId: string): Promise<IdeaUrgencyRating[]>;
}
//# sourceMappingURL=IdeaUrgencyRatingDao.d.ts.map