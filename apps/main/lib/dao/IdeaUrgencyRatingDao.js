import { and } from "@airport/air-traffic-control";
import { BaseIdeaUrgencyRatingDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
export class IdeaUrgencyRatingDao extends BaseIdeaUrgencyRatingDao {
    async findAllForUserAndSituationThread(userId, situationThreadId) {
        let iur, a, u, r;
        return await this._find({
            select: {},
            from: [
                iur = Q.IdeaUrgencyRating,
                a = iur.actor.leftJoin(),
                u = a.user.leftJoin(),
                iur.reply.leftJoin()
            ],
            where: and(u.uuId.equals(userId), r.situationThread.equals(situationThreadId))
        });
    }
}
//# sourceMappingURL=IdeaUrgencyRatingDao.js.map