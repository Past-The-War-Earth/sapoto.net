import { RepositoryEntity } from "@airport/holding-pattern";
import { IdeaSituation } from "@votecube/votecube";
import { IdeaUrgencyRating } from "./IdeaUrgencyRating";
import { ReplyRating } from "./ReplyRating";
import { ReplyType } from "./ReplyType";
import { SituationThread } from "./SituationThread";
export declare class Reply extends RepositoryEntity {
    situationThread: SituationThread;
    parentReply: Reply;
    childReplies: Reply[];
    ideaSituation: IdeaSituation;
    replyRatings: ReplyRating[];
    replyTypes: ReplyType[];
    urgencyRatings: IdeaUrgencyRating[];
    eisenhowerMatrix: {
        priority: number;
        urgency: number;
        votes: number;
        user: {
            priority: number;
            urgency: number;
        };
    };
}
//# sourceMappingURL=Reply.d.ts.map