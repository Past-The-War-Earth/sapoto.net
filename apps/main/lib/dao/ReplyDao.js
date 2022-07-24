var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { PLUS, Y } from "@airport/tarmaq-query";
import { BaseReplyDao, Q } from "../generated/generated";
let ReplyDao = class ReplyDao extends BaseReplyDao {
    async findForSituationThread(situationThread) {
        let r, a, st;
        return await this._find({
            SELECT: {
                '*': Y,
                situationIdea: {
                    agreementShareTotal: Y,
                    numberOfAgreements: Y
                }
            },
            FROM: [
                r = Q.Reply,
                r.situationIdea.leftJoin(),
                st = r.situationThread.leftJoin()
            ],
            WHERE: st.equals(situationThread)
        });
    }
    async updateUpOrDownRatingTotals(numberOfUpRatingsDelta, numberOfDownRatingsDelta, reply) {
        const r = Q.Reply;
        await this.db.updateWhere({
            UPDATE: r,
            SET: {
                numberOfDownRatings: PLUS(r.numberOfDownRatings, numberOfDownRatingsDelta),
                numberOfUpRatings: PLUS(r.numberOfUpRatings, numberOfUpRatingsDelta)
            },
            WHERE: r.equals(reply)
        });
    }
    async setReplyType(isIdea, isExperience, isQuestion, reply) {
        const r = Q.Reply;
        await this.db.updateWhere({
            UPDATE: r,
            SET: {
                isIdea,
                isExperience,
                isQuestion,
            },
            WHERE: r.equals(reply)
        });
    }
};
ReplyDao = __decorate([
    Injected()
], ReplyDao);
export { ReplyDao };
//# sourceMappingURL=ReplyDao.js.map