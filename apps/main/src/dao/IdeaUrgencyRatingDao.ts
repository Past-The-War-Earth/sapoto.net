import { and } from "@airport/air-traffic-control";
import { QActor } from "@airport/holding-pattern";
import { QUser } from "@airport/travel-document-checkpoint";
import { IdeaUrgencyRating } from "../ddl/IdeaUrgencyRating";
import { BaseIdeaUrgencyRatingDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
import { QIdeaUrgencyRating } from "../generated/qideaurgencyrating";
import { QReply } from "../generated/qreply";

export class IdeaUrgencyRatingDao
    extends BaseIdeaUrgencyRatingDao {

    async findAllForUserAndSituationThread(
        userId: string,
        situationThreadId: string
    ): Promise<IdeaUrgencyRating[]> {
        let iur: QIdeaUrgencyRating,
            a: QActor,
            u: QUser,
            r: QReply
        return await this._find({
            select: {},
            from: [
                iur = Q.IdeaUrgencyRating,
                a = iur.actor.leftJoin(),
                u = a.user.leftJoin(),
                r = iur.reply.leftJoin()
            ],
            where: and(
                u.uuId.equals(userId),
                r.situationThread.equals(situationThreadId)
            )
        })
    }

    async findAllForSituationThread(
        situationThreadId: string
    ): Promise<IdeaUrgencyRating[]> {
        let iur: QIdeaUrgencyRating,
            r: QReply
        return await this._find({
            select: {},
            from: [
                iur = Q.IdeaUrgencyRating,
                r = iur.reply.leftJoin()
            ],
            where: r.situationThread.equals(situationThreadId)
        })
    }
}