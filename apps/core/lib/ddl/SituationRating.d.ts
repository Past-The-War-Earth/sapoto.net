import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "./Situation";
export declare class SituationRating extends RepositoryEntity {
    importanceRating: 1 | 2 | 3 | 4 | 5;
    urgencyRating: 1 | 2 | 3 | 4 | 5;
    situation: Situation;
}
//# sourceMappingURL=SituationRating.d.ts.map