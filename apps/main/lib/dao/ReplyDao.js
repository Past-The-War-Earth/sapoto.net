var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ALL_FIELDS, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseReplyDao, Q } from "../generated/generated";
let ReplyDao = class ReplyDao extends BaseReplyDao {
    async findForSituation(situationId) {
        let alias = {};
        return await this.db.find.graph({
            select: Object.assign(Object.assign({}, ALL_FIELDS), { actor: {
                    id: Y,
                    user: {
                        username: Y
                    }
                }, replyRatings: {}, replyTypes: {}, situationThread: Object.assign({}, ALL_FIELDS), urgencyRatings: {} }),
            from: [
                alias.r = Q.Reply,
                alias.a = alias.r.actor.leftJoin(),
                alias.u = alias.a.user.leftJoin(),
                alias.rr = alias.r.replyRatings.leftJoin(),
                alias.rt = alias.r.replyTypes.leftJoin(),
                alias.st = alias.r.situationThread.innerJoin(),
                alias.ur = alias.r.urgencyRatings.leftJoin()
            ],
            where: alias.st.situation.equals(situationId)
        });
    }
};
ReplyDao = __decorate([
    Injected()
], ReplyDao);
export { ReplyDao };
//# sourceMappingURL=ReplyDao.js.map