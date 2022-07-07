import { and, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { QUser, User } from "@airport/travel-document-checkpoint";
import { Reply } from "../ddl/Reply";
import { ReplyRating } from "../ddl/ReplyRating";
import { SituationThread } from "../ddl/SituationThread";
import { BaseReplyRatingDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
import { QReply } from "../generated/qreply";
import { QReplyRating } from "../generated/qreplyrating";
import { QSituationThread } from "../generated/qsituationthread";

@Injected()
export class ReplyRatingDao
    extends BaseReplyRatingDao {

    async findForReplyAndUser(
        reply: Reply,
        user: User
    ): Promise<ReplyRating> {
        let rr: QReplyRating,
            a: QActor,
            u: QUser,
            r: QReply
        return await this._findUnique({
            select: {},
            from: [
                rr = Q.ReplyRating,
                a = rr.actor.leftJoin(),
                u = a.user.leftJoin(),
                r = rr.reply.leftJoin()
            ],
            where: and(
                r.equals(reply),
                u.GUID.equals(user.GUID)
            )
        })
    }

    async findAllForSituationThreadAndUser(
        situationThread: SituationThread,
        user: User
    ): Promise<ReplyRating[]> {
        let rr: QReplyRating,
            a: QActor,
            u: QUser,
            r: QReply,
            st: QSituationThread
        return await this._find({
            select: {},
            from: [
                rr = Q.ReplyRating,
                a = rr.actor.leftJoin(),
                u = a.user.leftJoin(),
                r = rr.reply.leftJoin(),
                st = r.situationThread.leftJoin(),

            ],
            where: and(
                st.equals(situationThread),
                u.GUID.equals(user.GUID)
            )
        })
    }

}
