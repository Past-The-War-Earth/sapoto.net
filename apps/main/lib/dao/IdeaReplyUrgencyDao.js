import { and } from "@airport/air-traffic-control";
import { BaseIdeaReplyUrgencyDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
export class IdeaReplyUrgencyDao extends BaseIdeaReplyUrgencyDao {
    async findAllForUserAndSituationThread(userId, situationThreadId) {
        let iru, a, u, r;
        return await this._find({
            select: {},
            from: [
                iru = Q.IdeaUrgencyRating,
                a = iru.actor.leftJoin(),
                u = a.user.leftJoin(),
                r = iru.reply.leftJoin()
            ],
            where: and(u.uuId.equals(userId), r.situationThread.equals(situationThreadId))
        });
    }
    async findAllForSituationThread(situationThreadId) {
        let iru, r;
        return await this._find({
            select: {},
            from: [
                iru = Q.IdeaUrgencyRating,
                r = iru.reply.leftJoin()
            ],
            where: r.situationThread.equals(situationThreadId)
        });
    }
}
//# sourceMappingURL=IdeaReplyUrgencyDao.js.map