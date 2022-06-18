import { AirEntity } from "@airport/holding-pattern";
import { SituationRating } from "./SituationRating";
import { Topic } from "./Topic";
export declare class Situation extends AirEntity {
    text: string;
    topic: Topic;
    ratings?: SituationRating[];
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
//# sourceMappingURL=situation.d.ts.map