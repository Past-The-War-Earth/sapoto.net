var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { and } from "@airport/tarmaq-query";
import { BaseReplyRatingDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
let ReplyRatingDao = class ReplyRatingDao extends BaseReplyRatingDao {
    async findForReplyAndUser(reply, user) {
        let rr, a, u, r;
        return await this._findUnique({
            select: {},
            from: [
                rr = Q.ReplyRating,
                a = rr.actor.leftJoin(),
                u = a.userAccount.leftJoin(),
                r = rr.reply.leftJoin()
            ],
            where: and(r.equals(reply), u.GUID.equals(user.GUID))
        });
    }
    async findAllForSituationThreadAndUser(situationThread, user) {
        let rr, a, u, r, st;
        return await this._find({
            select: {},
            from: [
                rr = Q.ReplyRating,
                a = rr.actor.leftJoin(),
                u = a.userAccount.leftJoin(),
                r = rr.reply.leftJoin(),
                st = r.situationThread.leftJoin(),
            ],
            where: and(st.equals(situationThread), u.GUID.equals(user.GUID))
        });
    }
};
ReplyRatingDao = __decorate([
    Injected()
], ReplyRatingDao);
export { ReplyRatingDao };
//# sourceMappingURL=ReplyRatingDao.js.map