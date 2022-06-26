import { and, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { QUser } from "@airport/travel-document-checkpoint";
import { ReplyRating } from "../ddl/ReplyRating";
import { BaseReplyRatingDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
import { QReply } from "../generated/qreply";
import { QReplyRating } from "../generated/qreplyrating";
import { QSituationThread } from "../generated/qsituationthread";

@Injected()
export class ReplyRatingDao
    extends BaseReplyRatingDao {

        async findAllForReply(
            replyUuId: string
        ): Promise<ReplyRating[]> {
            let rr: QReplyRating,
                r: QReply
            return await this._find({
                select: {
                    '*': Y,
                    actor: {
                        user: {
                            uuId: Y
                        }
                    }
                },
                from: [
                    rr = Q.ReplyRating,
                    r = rr.reply.leftJoin()
                ],
                where: r.equals(replyUuId)
            })
        }

}
