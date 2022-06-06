import { and } from "@airport/air-traffic-control";
import { QActor } from "@airport/holding-pattern";
import { QUser } from "@airport/travel-document-checkpoint";
import { IdeaReplyUrgency } from "../ddl/IdeaReplyUrgency";
import { BaseIdeaReplyUrgencyDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
import { QIdeaReplyUrgency } from "../generated/qideareplyurgency";
import { QReply } from "../generated/qreply";

export class IdeaReplyUrgencyDao
    extends BaseIdeaReplyUrgencyDao {

    async findAllForUserAndSituationThread(
        userId: string,
        situationThreadId: string
    ): Promise<IdeaReplyUrgency[]> {
        let iru: QIdeaReplyUrgency,
            a: QActor,
            u: QUser,
            r: QReply
        return await this._find({
            select: {},
            from: [
                iru = Q.IdeaUrgencyRating,
                a = iru.actor.leftJoin(),
                u = a.user.leftJoin(),
                r = iru.reply.leftJoin()
            ],
            where: and(
                u.uuId.equals(userId),
                r.situationThread.equals(situationThreadId)
            )
        })
    }

    async findAllForSituationThread(
        situationThreadId: string
    ): Promise<IdeaReplyUrgency[]> {
        let iru: QIdeaReplyUrgency,
            r: QReply
        return await this._find({
            select: {},
            from: [
                iru = Q.IdeaUrgencyRating,
                r = iru.reply.leftJoin()
            ],
            where: r.situationThread.equals(situationThreadId)
        })
    }
}