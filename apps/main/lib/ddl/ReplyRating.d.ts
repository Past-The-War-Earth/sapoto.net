import { RepositoryEntity } from "@airport/holding-pattern";
import { Reply } from "./Reply";
export declare class ReplyRating extends RepositoryEntity {
    reply: Reply;
    rating: 1 | 0 | -1;
    urgency: 1 | 2 | 3 | 4 | 5;
}
//# sourceMappingURL=ReplyRating.d.ts.map