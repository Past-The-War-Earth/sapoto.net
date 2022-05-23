var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ALL_FIELDS, and, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseSituationThreadDao, Q } from "../generated/generated";
let SituationThreadDao = class SituationThreadDao extends BaseSituationThreadDao {
    async add(situationThread) {
        await this.save(situationThread);
    }
    async findWithListingDetailsForATopic(topicId) {
        let alias = {};
        return await this.db.find.graph({
            select: Object.assign(Object.assign({}, ALL_FIELDS), { actor: {
                    user: {
                        username: Y
                    }
                }, situation: Object.assign(Object.assign({}, ALL_FIELDS), { ratings: {} }) }),
            from: [
                alias.st = Q.SituationThread,
                alias.s = alias.st.situation.innerJoin(),
                alias.sR = alias.s.ratings.leftJoin(),
                alias.a = alias.st.actor.leftJoin(),
                alias.u = alias.a.user.leftJoin()
            ],
            where: and(alias.s.topic.equals(topicId))
        });
    }
};
SituationThreadDao = __decorate([
    Injected()
], SituationThreadDao);
export { SituationThreadDao };
//# sourceMappingURL=SituationThreadDao.js.map