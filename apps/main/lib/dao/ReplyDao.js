var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseReplyDao, Q, } from "../generated/generated";
let ReplyDao = class ReplyDao extends BaseReplyDao {
    async findForSituation(situationThreadId) {
        let r, a, rr, rra, ur, ura;
        return await this._find({
            select: {
                '*': Y,
                actor: {
                    uuId: Y,
                    user: {
                        username: Y
                    }
                },
                replyRatings: {
                    actor: {
                        user: {
                            uuId: Y,
                        }
                    }
                },
                replyTypes: {
                    type: Y
                },
                urgencyRatings: {
                    actor: {
                        user: {
                            uuId: Y,
                        }
                    }
                }
            },
            from: [
                r = Q.Reply,
                a = r.actor.leftJoin(),
                a.user.leftJoin(),
                rr = r.replyRatings.leftJoin(),
                rra = rr.actor.leftJoin(),
                rra.user.leftJoin(),
                r.replyTypes.leftJoin(),
                ur = r.urgencyRatings.leftJoin(),
                ura = ur.actor.leftJoin(),
                ura.user.leftJoin()
            ],
            where: r.situationThread.equals(situationThreadId)
        });
    }
};
ReplyDao = __decorate([
    Injected()
], ReplyDao);
export { ReplyDao };
//# sourceMappingURL=ReplyDao.js.map