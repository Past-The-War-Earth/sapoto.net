import { Reply } from "../ddl/Reply";
import { SituationThread } from "../ddl/SituationThread";
import { BaseReplyDao } from "../generated/generated";
export declare class ReplyDao extends BaseReplyDao {
    findForSituationThread(situationThread: SituationThread | string): Promise<Reply[]>;
    updateUpOrDownRatingTotals(numberOfUpRatingsDelta: number, numberOfDownRatingsDelta: number, reply: Reply): Promise<void>;
    setReplyType(isIdea: boolean, isExperience: boolean, isQuestion: boolean, reply: Reply): Promise<void>;
}
//# sourceMappingURL=ReplyDao.d.ts.map