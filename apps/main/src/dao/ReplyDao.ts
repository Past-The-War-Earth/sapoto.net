import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { Reply } from "../ddl/Reply";
import {
    BaseReplyDao,
    Q,
    QReply,
} from "../generated/generated";

@Injected()
export class ReplyDao
    extends BaseReplyDao {

    async findForSituation(
        situationThreadId: string
    ): Promise<Reply[]> {
        let r: QReply,
            a: QActor
        return await this._find({
            select: {
                '*': Y,
                actor: {
                    uuId: Y,
                    user: {
                        username: Y
                    }
                },
                replyTypes: {
                    type: Y
                },
                situationIdea: {
                    agreementTotal: Y,
                    numberOfAgreementRatings: Y
                }
            },
            from: [
                r = Q.Reply,
                a = r.actor.leftJoin(),
                a.user.leftJoin(),
                r.replyTypes.leftJoin(),
                r.situationIdea.leftJoin()
            ],
            where: r.situationThread.equals(situationThreadId)
        })
    }
}
