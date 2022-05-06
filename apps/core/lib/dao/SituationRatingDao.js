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
    async findForSituationAndUser(situation, user) {
        let sir;
        let actor;
        let qUser;
        return await this.db.findOne.tree({
            select: {},
            from: [
                sir = Q.SituationRating,
                actor = sir.actor.innerJoin(),
                qUser = actor.user.innerJoin()
            ],
            where: and(sir.situation.equals(situation), qUser.uuId.equals(user.uuId))
        });
    }
};
SituationRatingDao = __decorate([
    Injected()
], SituationRatingDao);
export { SituationRatingDao };
//# sourceMappingURL=SituationRatingDao.js.map