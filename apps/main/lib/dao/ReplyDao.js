var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseReplyDao, Q } from "../generated/generated";
let ReplyDao = class ReplyDao extends BaseReplyDao {
    async findForSituationThread(situationThreadUuId) {
        let r, a, st;
        return await this._find({
            select: {
                '*': Y,
                uuId: Y,
                actor: {
                    user: {
                        username: Y
                    }
                },
                replyTypes: {
                    type: Y
                },
                situationIdea: {
                    agreementShareTotal: Y,
                    numberOfAgreements: Y
                }
            },
            from: [
                r = Q.Reply,
                a = r.actor.leftJoin(),
                a.user.leftJoin(),
                r.replyTypes.leftJoin(),
                r.situationIdea.leftJoin(),
                st = r.situationThread.leftJoin()
            ],
            where: st.equals(situationThreadUuId)
        });
    }
};
ReplyDao = __decorate([
    Injected()
], ReplyDao);
export { ReplyDao };
//# sourceMappingURL=ReplyDao.js.map