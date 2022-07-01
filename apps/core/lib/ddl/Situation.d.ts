import { AirEntity } from "@airport/holding-pattern";
import { SituationRating } from "./SituationRating";
import { Topic } from "./Topic";
export declare class Situation extends AirEntity {
    text: string;
    urgencyTotal?: number;
    numberOfUrgencyRatings?: number;
    importanceTotal?: number;
    numberOfImportanceRatings?: number;
    topic: Topic;
    ratings?: SituationRating[];
    userRating?: SituationRating;
}
//# sourceMappingURL=situation.d.ts.map