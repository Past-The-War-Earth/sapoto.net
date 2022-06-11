import { Y } from "@airport/air-traffic-control";
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
                replyTypes: {
                    type: Y
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
                r.replyTypes.leftJoin(),
                r.situationIdea.leftJoin(),
                st = r.situationThread.leftJoin()
            ],
            where: st.equals(situationThreadUuId)
        })
    }
}
