import { and } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { QUser } from "@airport/travel-document-checkpoint";
import { ReplyRating } from "../ddl/ReplyRating";
import { BaseReplyRatingDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
import { QReply } from "../generated/qreply";
import { QReplyRating } from "../generated/qreplyrating";

@Injected()
export class ReplyRatingDao
    extends BaseReplyRatingDao {

        async findAllForUserAndSituationThread(
            userId: string,
            situationThreadId: string
        ): Promise<ReplyRating[]> {
            let rr: QReplyRating,
                a: QActor,
                u: QUser,
                r: QReply
            return await this._find({
                select: {},
                from: [
                    rr = Q.ReplyRating,
                    a = rr.actor.leftJoin(),
                    u = a.user.leftJoin(),
                    r = rr.reply.leftJoin()
                ],
                where: and(
                    u.uuId.equals(userId),
                    r.situationThread.equals(situationThreadId)
                )
            })
        }

        async findAllForSituationThread(
            situationThreadId: string
        ): Promise<ReplyRating[]> {
            let rr: QReplyRating,
                r: QReply
            return await this._find({
                select: {},
                from: [
                    rr = Q.ReplyRating,
                    r = rr.reply.leftJoin()
                ],
                where: r.situationThread.equals(situationThreadId)
            })
        }

}
