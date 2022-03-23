import { RepositoryEntity } from "@airport/holding-pattern";
import { SituationRating } from "./SituationRating";
import { Topic } from "./Topic";
export declare class Situation extends RepositoryEntity {
    text: string;
    topic: Topic;
    ratings: SituationRating[];
}
//# sourceMappingURL=Situation.d.ts.map