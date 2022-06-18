var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { BaseSituationRatingDao, Q } from "../generated/generated";
import { and } from "@airport/air-traffic-control";
let SituationRatingDao = class SituationRatingDao extends BaseSituationRatingDao {
    async findForSituationAndUser(situationUuId, user) {
        let sr;
        let a;
        let u;
        let s;
        return await this._findOne({
            select: {},
            from: [
                sr = Q.SituationRating,
                a = sr.actor.innerJoin(),
                u = a.user.innerJoin(),
                s = sr.situation.innerJoin()
            ],
            where: and(s.equals(situationUuId), u.uuId.equals(user.uuId))
        });
    }
};
SituationRatingDao = __decorate([
    Injected()
], SituationRatingDao);
export { SituationRatingDao };
//# sourceMappingURL=SituationRatingDao.js.map