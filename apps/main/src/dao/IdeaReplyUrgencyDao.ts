import { and } from "@airport/air-traffic-control";
import { QActor } from "@airport/holding-pattern";
import { QUser } from "@airport/travel-document-checkpoint";
import { IdeaReplyUrgency } from "../ddl/IdeaReplyUrgency";
import { BaseIdeaReplyUrgencyDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
import { QIdeaReplyUrgency } from "../generated/qideareplyurgency";
import { QReply } from "../generated/qreply";
import { QSituationThread } from "../generated/qsituationthread";

export class IdeaReplyUrgencyDao
    extends BaseIdeaReplyUrgencyDao {

    async findAllForUserAndSituationThread(
        userUuId: string,
        situationThreadUuId: string
    ): Promise<IdeaReplyUrgency[]> {
        let iru: QIdeaReplyUrgency,
            a: QActor,
            u: QUser,
            r: QReply,
            st: QSituationThread
        return await this._find({
            select: {},
            from: [
                iru = Q.IdeaUrgencyRating,
                a = iru.actor.leftJoin(),
                u = a.user.leftJoin(),
                r = iru.reply.leftJoin(),
                st = r.situationThread.leftJoin()
            ],
            where: and(
                u.uuId.equals(userUuId),
                st.equals(situationThreadUuId)
            )
        })
    }

    async findAllForSituationThread(
        situationThreadUuId: string
    ): Promise<IdeaReplyUrgency[]> {
        let iru: QIdeaReplyUrgency,
            r: QReply,
            st: QSituationThread
        return await this._find({
            select: {},
            from: [
                iru = Q.IdeaUrgencyRating,
                r = iru.reply.leftJoin(),
                st = r.situationThread.leftJoin()
            ],
            where: st.equals(situationThreadUuId)
        })
    }
}