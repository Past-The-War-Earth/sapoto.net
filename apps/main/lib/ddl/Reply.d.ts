import { RepositoryEntity } from "@airport/holding-pattern";
import { IdeaSituation } from "@votecube/votecube";
import { IdeaUrgencyRating } from "./IdeaUrgencyRating";
import { ReplyRating } from "./ReplyRating";
import { ReplyType } from "./ReplyType";
import { SituationThread } from "./SituationThread";
export declare class Reply extends RepositoryEntity {
    text: string;
    situationThread: SituationThread;
    parentReply?: Reply;
    childReplies?: Reply[];
    ideaSituation?: IdeaSituation;
    replyRatings?: ReplyRating[];
    replyTypes?: ReplyType[];
    urgencyRatings?: IdeaUrgencyRating[];
    ratings?: {
        down: number;
        up: number;
        user: {
            rating: number;
        };
    };
    urgency?: {
        votes: number;
        total: number;
        user: {
            urgency: number;
        };
    };
}
//# sourceMappingURL=Reply.d.ts.map