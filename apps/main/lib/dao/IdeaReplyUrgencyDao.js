import { and, Y } from "@airport/air-traffic-control";
import { BaseIdeaReplyUrgencyDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
export class IdeaReplyUrgencyDao extends BaseIdeaReplyUrgencyDao {
    async findAllForUserAndSituationThread(userUuId, situationThreadUuId) {
        let iru, a, u, r, st;
        return await this._find({
            select: {},
            from: [
                iru = Q.IdeaUrgencyRating,
                a = iru.actor.leftJoin(),
                u = a.user.leftJoin(),
                r = iru.reply.leftJoin(),
                st = r.situationThread.leftJoin()
            ],
            where: and(u.uuId.equals(userUuId), st.equals(situationThreadUuId))
        });
    }
    async findAllForReply(replyUuId) {
        let iru, r;
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
                iru = Q.IdeaUrgencyRating,
                r = iru.reply.leftJoin()
            ],
            where: r.equals(replyUuId)
        });
    }
}
//# sourceMappingURL=IdeaReplyUrgencyDao.js.map