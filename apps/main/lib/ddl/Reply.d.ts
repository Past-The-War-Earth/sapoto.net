import { AirEntity } from "@airport/holding-pattern";
import { SituationIdea } from "@votecube/votecube";
import { IdeaReplyUrgency } from "./IdeaReplyUrgency";
import { ReplyRating } from "./ReplyRating";
import { ReplyType } from "./ReplyType";
import { SituationThread } from "./SituationThread";
export declare class Reply extends AirEntity {
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
    ideaReplyUrgencies?: IdeaReplyUrgency[];
}
//# sourceMappingURL=Reply.d.ts.map