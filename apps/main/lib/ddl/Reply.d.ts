import { AirEntity } from "@airport/holding-pattern";
import { SituationIdea } from "@votecube/votecube";
import { ReplyRating } from "./ReplyRating";
import { SituationThread } from "./SituationThread";
export declare class Reply extends AirEntity {
    text: string;
    isIdea: boolean;
    isExperience: boolean;
    isQuestion: boolean;
    numberOfDownRatings: number;
    numberOfUpRatings: number;
    situationThread: SituationThread;
    parentReply?: Reply;
    situationIdea?: SituationIdea;
    childReplies?: Reply[];
    replyRatings?: ReplyRating[];
    userRelyRating?: ReplyRating;
}
//# sourceMappingURL=Reply.d.ts.map