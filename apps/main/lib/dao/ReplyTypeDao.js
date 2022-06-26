var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseReplyTypeDao, Q } from "../generated/generated";
let ReplyTypeDao = class ReplyTypeDao extends BaseReplyTypeDao {
    async getAllForReply(replyUuId) {
        let rt, r;
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
        });
    }
};
ReplyTypeDao = __decorate([
    Injected()
], ReplyTypeDao);
export { ReplyTypeDao };
//# sourceMappingURL=ReplyTypeDao.js.map