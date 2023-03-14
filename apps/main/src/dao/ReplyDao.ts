import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { PLUS, Y } from "@airport/tarmaq-query";
import { Reply } from "../ddl/Reply";
import { SituationThread } from "../ddl/SituationThread";
import {
    BaseReplyDao
} from "../generated/baseDaos";
import {
    Q_localhost_colon_8080____at_sapoto_slash_main as Q
} from "../generated/qApplication";
import {
    QReply,
    QSituationThread
} from "../generated/qInterfaces";

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
            SELECT: {
                '*': Y,
                situationIdea: {
                    agreementShareTotal: Y,
                    numberOfAgreements: Y
                }
            },
            FROM: [
                r = Q.Reply,
                r.situationIdea.LEFT_JOIN(),
                st = r.situationThread.LEFT_JOIN()
            ],
            WHERE: st.equals(situationThread)
        })
    }

    async updateUpOrDownRatingTotals(
        numberOfUpRatingsDelta: number,
        numberOfDownRatingsDelta: number,
        reply: Reply
    ): Promise<void> {
        const r = Q.Reply
        await this.db.updateWhere({
            UPDATE: r,
            SET: {
                numberOfDownRatings: PLUS(r.numberOfDownRatings, numberOfDownRatingsDelta),
                numberOfUpRatings: PLUS(r.numberOfUpRatings, numberOfUpRatingsDelta)
            },
            WHERE: r.equals(reply)
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
            UPDATE: r,
            SET: {
                isIdea,
                isExperience,
                isQuestion,
            },
            WHERE: r.equals(reply)
        })
    }

}
