var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { and } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseReplyRatingDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
let ReplyRatingDao = class ReplyRatingDao extends BaseReplyRatingDao {
    async findAllForUserAndSituationThread(userId, situationThreadUuId) {
        let rr, a, u, r, st;
        return await this._find({
            select: {},
            from: [
                rr = Q.ReplyRating,
                a = rr.actor.leftJoin(),
                u = a.user.leftJoin(),
                r = rr.reply.leftJoin()
            ],
            where: and(u.uuId.equals(userId), st.equals(situationThreadUuId))
        });
    }
    async findAllForSituationThread(situationThreadUuId) {
        let rr, r, st;
        return await this._find({
            select: {},
            from: [
                rr = Q.ReplyRating,
                r = rr.reply.leftJoin(),
                st = r.situationThread.leftJoin()
            ],
            where: st.equals(situationThreadUuId)
        });
    }
};
ReplyRatingDao = __decorate([
    Injected()
], ReplyRatingDao);
export { ReplyRatingDao };
//# sourceMappingURL=ReplyRatingDao.js.map