import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "@sapoto/core";
import { ICounts } from "./ICounts";
import { Reply } from "./Reply";
export declare class SituationThread extends RepositoryEntity {
    situation: Situation;
    replies: Reply[];
    counts: ICounts;
}
//# sourceMappingURL=SituationThread.d.ts.map