import { plus, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { Reply } from "../ddl/Reply";
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
        situationThreadUuId: string
    ): Promise<Reply[]> {
        let r: QReply,
            a: QActor,
            st: QSituationThread
        return await this._find({
            select: {
                '*': Y,
                uuId: Y,
                actor: {
                    user: {
                        username: Y
                    }
                },
                situationIdea: {
                    agreementShareTotal: Y,
                    numberOfAgreements: Y
                }
            },
            from: [
                r = Q.Reply,
                a = r.actor.leftJoin(),
                a.user.leftJoin(),
                r.situationIdea.leftJoin(),
                st = r.situationThread.leftJoin()
            ],
            where: st.equals(situationThreadUuId)
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
