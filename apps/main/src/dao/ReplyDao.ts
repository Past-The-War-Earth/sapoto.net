import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { Reply } from "../ddl/Reply";
import {
    BaseReplyDao,
    Q,
    QIdeaUrgencyRating,
    QReply,
    QReplyRating,
} from "../generated/generated";

@Injected()
export class ReplyDao
    extends BaseReplyDao {

    async findForSituation(
        situationThreadId: string
    ): Promise<Reply[]> {
        let r: QReply,
            a: QActor,
            rr: QReplyRating,
            rra: QActor,
            ur: QIdeaUrgencyRating,
            ura: QActor
        return await this._find({
            select: {
                '*': Y,
                actor: {
                    uuId: Y,
                    user: {
                        username: Y
                    }
                },
                replyRatings: {
                    actor: {
                        user: {
                            uuId: Y,
                        }
                    }
                },
                replyTypes: {
                    type: Y
                },
                urgencyRatings: {
                    actor: {
                        user: {
                            uuId: Y,
                        }
                    }
                }
            },
            from: [
                r = Q.Reply,
                a = r.actor.leftJoin(),
                a.user.leftJoin(),
                rr = r.replyRatings.leftJoin(),
                rra = rr.actor.leftJoin(),
                rra.user.leftJoin(),
                r.replyTypes.leftJoin(),
                ur = r.urgencyRatings.leftJoin(),
                ura = ur.actor.leftJoin(),
                ura.user.leftJoin()
            ],
            where: r.situationThread.equals(situationThreadId)
        })
    }
}
