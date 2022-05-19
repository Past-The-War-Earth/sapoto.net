import { RepositoryEntity } from "@airport/holding-pattern";
import { SituationRating } from "./SituationRating";
import { Topic } from "./Topic";
export declare class Situation extends RepositoryEntity {
    text: string;
    topic: Topic;
    ratings: SituationRating[];
    eisenhowerMatrix: {
        importance: number;
        urgency: number;
        votes: number;
        user: {
            importance: number;
            urgency: number;
        };
    };
}
//# sourceMappingURL=Situation.d.ts.map