import { AirEntity } from "@airport/holding-pattern";
import { SituationIdea } from "@votecube/votecube";
import { ReplyRating } from "./ReplyRating";
import { ReplyType } from "./ReplyType";
import { SituationThread } from "./SituationThread";
export declare class Reply extends AirEntity {
    text: string;
    numberOfDownRatings: number;
    numberOfUpRatings: number;
    situationThread: SituationThread;
    parentReply?: Reply;
    situationIdea?: SituationIdea;
    childReplies?: Reply[];
    replyRatings?: ReplyRating[];
    replyTypes?: ReplyType[];
    userRelyRating?: ReplyRating;
}
//# sourceMappingURL=Reply.d.ts.map