import { ALL_FIELDS, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { Reply } from "../ddl/Reply";
import {
    BaseReplyDao,
    Q
} from "../generated/generated";

@Injected()
export class ReplyDao
    extends BaseReplyDao {

    async findForSituation(
        situationId: string
    ): Promise<Reply[]> {
        let alias = {} as any
        return await this.db.find.graph({
            select: {
                ...ALL_FIELDS,
                actor: {
                    id: Y,
                    user: {
                        username: Y
                    }
                },
                replyRatings: {},
                replyTypes: {},
                situationThread: {
                    ...ALL_FIELDS
                },
                urgencyRatings: {}
            },
            from: [
                alias.r = Q.Reply,
                alias.a = alias.r.actor.leftJoin(),
                alias.u = alias.a.user.leftJoin(),
                alias.rr = alias.r.replyRatings.leftJoin(),
                alias.rt = alias.r.replyTypes.leftJoin(),
                alias.st = alias.r.situationThread.innerJoin(),
                alias.ur = alias.r.urgencyRatings.leftJoin()
            ],
            where: alias.st.situation.equals(situationId)
        })
    }
}
