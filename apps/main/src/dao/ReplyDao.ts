import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { plus, Y } from "@airport/tarmaq-query";
import { Reply } from "../ddl/Reply";
import { SituationThread } from "../ddl/SituationThread";
import {
    BaseReplyDao,
    Q,
    QReply,
    QSituationThread
} from "../generated/generated";

@Injected()
export class ReplyDao
    extends BaseReplyDao {

    async findForSituationThread(
        situationThread: SituationThread | string
    ): Promise<Reply[]> {
        let r: QReply,
            a: QActor,
            st: QSituationThread
        return await this._find({
            select: {
                '*': Y,
                situationIdea: {
                    agreementShareTotal: Y,
                    numberOfAgreements: Y
                }
            },
            from: [
                r = Q.Reply,
                r.situationIdea.leftJoin(),
                st = r.situationThread.leftJoin()
            ],
            where: st.equals(situationThread)
        })
    }

    async updateUpOrDownRatingTotals(
        numberOfUpRatingsDelta: number,
        numberOfDownRatingsDelta: number,
        reply: Reply
    ): Promise<void> {
        const r = Q.Reply
        await this.db.updateWhere({
            update: r,
            set: {
                numberOfDownRatings: plus(r.numberOfDownRatings, numberOfDownRatingsDelta),
                numberOfUpRatings: plus(r.numberOfUpRatings, numberOfUpRatingsDelta)
            },
            where: r.equals(reply)
        })
    }

    async setReplyType(
        isIdea: boolean,
        isExperience: boolean,
        isQuestion: boolean,
        reply: Reply
    ): Promise<void> {
        const r = Q.Reply
        await this.db.updateWhere({
            update: r,
            set: {
                isIdea,
                isExperience,
                isQuestion,
            },
            where: r.equals(reply)
        })
    }

}
