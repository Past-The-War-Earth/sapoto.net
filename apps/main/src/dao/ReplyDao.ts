import { ALL_FIELDS, RepositoryEntityId, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { QUser } from "@airport/travel-document-checkpoint";
import {
    BaseReplyDao, IBaseReplyDao, IReply,
    Q, QIdeaUrgencyRating, QReply,
    QReplyRating, QReplyType,
    QSituationThread
} from "../generated/generated";

export interface IReplyDao
    extends IBaseReplyDao {

        findForSituation(
            situationId: RepositoryEntityId
        ): Promise<IReply[]>

}

@Injected()
export class ReplyDao
    extends BaseReplyDao
    implements IReplyDao {

    async findForSituation(
        situationId: RepositoryEntityId
    ): Promise<IReply[]> {
        let r: QReply
        let a: QActor
        let u: QUser
        let rr: QReplyRating
        let rt: QReplyType
        let st: QSituationThread
        let ur: QIdeaUrgencyRating
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
                r = Q.Reply,
                a = r.actor.leftJoin(),
                u = a.user.leftJoin(),
                rr = r.replyRatings.leftJoin(),
                rt = r.replyTypes.leftJoin(),
                st = r.situationThread.innerJoin(),
                ur = r.urgencyRatings.leftJoin()
            ],
            where: st.situation.equals(situationId)
        })
    }
}
