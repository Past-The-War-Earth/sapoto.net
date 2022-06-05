import { RepositoryEntity } from "@airport/holding-pattern";
import { SituationIdea } from "@votecube/votecube";
import { IdeaUrgencyRating } from "./IdeaUrgencyRating";
import { ReplyRating } from "./ReplyRating";
import { ReplyType } from "./ReplyType";
import { SituationThread } from "./SituationThread";
export declare class Reply extends RepositoryEntity {
    text: string;
    numberOfDownRatings: number;
    numberOfUpRatings: number;
    urgencyTotal: number;
    numberOfUrgencyRatings: number;
    situationThread: SituationThread;
    parentReply?: Reply;
    situationIdea?: SituationIdea;
    childReplies?: Reply[];
    replyRatings?: ReplyRating[];
    replyTypes?: ReplyType[];
    urgencyRatings?: IdeaUrgencyRating[];
}
//# sourceMappingURL=Reply.d.ts.map