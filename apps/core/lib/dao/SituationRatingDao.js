var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { BaseSituationRatingDao, Q } from "../generated/generated";
import { AND } from "@airport/tarmaq-query";
let SituationRatingDao = class SituationRatingDao extends BaseSituationRatingDao {
    async findForSituationAndUser(situationUuId, user) {
        let sr, a, u, s;
        return await this._findUnique({
            SELECT: {},
            FROM: [
                sr = Q.SituationRating,
                a = sr.actor.innerJoin(),
                u = a.userAccount.innerJoin(),
                s = sr.situation.innerJoin()
            ],
            WHERE: AND(s.equals(situationUuId), u.equals(user))
        });
    }
};
SituationRatingDao = __decorate([
    Injected()
], SituationRatingDao);
export { SituationRatingDao };
//# sourceMappingURL=SituationRatingDao.js.map