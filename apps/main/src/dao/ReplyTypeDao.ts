import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { ReplyType } from "../ddl/ReplyType";
import { BaseReplyTypeDao, Q, QReply, QReplyType } from "../generated/generated";

@Injected()
export class ReplyTypeDao
    extends BaseReplyTypeDao {

    async getAllForReply(
        replyUuId: string
    ): Promise<ReplyType[]> {
        let rt: QReplyType,
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
                rt = Q.ReplyType,
                r = rt.reply.leftJoin()
            ],
            where: r.equals(replyUuId)
        })
    }

}
