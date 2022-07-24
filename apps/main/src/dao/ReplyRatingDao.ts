import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { AND } from "@airport/tarmaq-query";
import {
    QUserAccount,
    UserAccount
} from "@airport/travel-document-checkpoint";
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
        user: UserAccount
    ): Promise<ReplyRating> {
        let rr: QReplyRating,
            a: QActor,
            u: QUserAccount,
            r: QReply
        return await this._findUnique({
            SELECT: {},
            FROM: [
                rr = Q.ReplyRating,
                a = rr.actor.LEFT_JOIN(),
                u = a.userAccount.LEFT_JOIN(),
                r = rr.reply.LEFT_JOIN()
            ],
            WHERE: AND(
                r.equals(reply),
                u.GUID.equals(user.GUID)
            )
        })
    }

    async findAllForSituationThreadAndUser(
        situationThread: SituationThread,
        user: UserAccount
    ): Promise<ReplyRating[]> {
        let rr: QReplyRating,
            a: QActor,
            u: QUserAccount,
            r: QReply,
            st: QSituationThread
        return await this._find({
            SELECT: {},
            FROM: [
                rr = Q.ReplyRating,
                a = rr.actor.LEFT_JOIN(),
                u = a.userAccount.LEFT_JOIN(),
                r = rr.reply.LEFT_JOIN(),
                st = r.situationThread.LEFT_JOIN(),

            ],
            WHERE: AND(
                st.equals(situationThread),
                u.GUID.equals(user.GUID)
            )
        })
    }

}
