import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "./Situation";
import { Theme } from "./Theme";
export declare class Topic extends RepositoryEntity {
    name: string;
    imagePath: string;
    theme: Theme;
    situations: Situation[];
}
//# sourceMappingURL=Topic.d.ts.map