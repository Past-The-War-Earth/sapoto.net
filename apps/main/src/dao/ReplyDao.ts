import { ALL_FIELDS, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { QUser } from "@airport/travel-document-checkpoint";
import { Reply } from "../ddl/Reply";
import {
    BaseReplyDao,
    Q,
    QIdeaUrgencyRating,
    QReply,
    QReplyRating,
    QReplyType,
    QSituationThread,
} from "../generated/generated";

@Injected()
export class ReplyDao
    extends BaseReplyDao {

    async findForSituation(
        situationId: string
    ): Promise<Reply[]> {
        let r: QReply,
            a: QActor,
            u: QUser,
            rr: QReplyRating,
            rt: QReplyType,
            st: QSituationThread,
            iur: QIdeaUrgencyRating
        return await this._find({
            select: {
                '*': Y,
                actor: {
                    id: Y,
                    user: {
                        username: Y
                    }
                },
                replyRatings: {},
                replyTypes: {},
                situationThread: {},
                urgencyRatings: {}
            },
            from: [
                r = Q.Reply,
                a = r.actor.leftJoin(),
                u = a.user.leftJoin(),
                rr = r.replyRatings.leftJoin(),
                rt = r.replyTypes.leftJoin(),
                st = r.situationThread.innerJoin(),
                iur = r.urgencyRatings.leftJoin()
            ],
            where: st.situation.equals(situationId)
        })
    }
}
