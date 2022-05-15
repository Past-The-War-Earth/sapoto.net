var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { ALL_FIELDS, and } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseSituationDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
let SituationDao = class SituationDao extends BaseSituationDao {
    async findWithListingDetailsForATopic(topic) {
        let s;
        let sR;
        let to;
        let th;
        return await this.db.find.graph({
            select: Object.assign(Object.assign({}, ALL_FIELDS), { ratings: {}, topic: Object.assign(Object.assign({}, ALL_FIELDS), { theme: {} }) }),
            from: [
                s = Q.Situation,
                sR = s.ratings.leftJoin(),
                to = s.topic.leftJoin(),
                th = to.theme.leftJoin()
            ],
            where: and(to.repository.id.equals(topic.repository.id), to.actor.id.equals(topic.actor.id), to.actorRecordId.equals(topic.actorRecordId))
        });
    }
    async findWithListingDetailsForATheme(theme) {
        let s;
        let sR;
        let to;
        let th;
        return await this.db.find.graph({
            select: Object.assign(Object.assign({}, ALL_FIELDS), { ratings: {}, topic: Object.assign(Object.assign({}, ALL_FIELDS), { theme: {} }) }),
            from: [
                s = Q.Situation,
                sR = s.ratings.leftJoin(),
                to = s.topic.leftJoin(),
                th = to.theme.leftJoin()
            ],
            where: and(th.repository.id.equals(theme.repository.id), th.actor.id.equals(theme.actor.id), th.actorRecordId.equals(theme.actorRecordId))
        });
    }
};
SituationDao = __decorate([
    Injected()
], SituationDao);
export { SituationDao };
//# sourceMappingURL=SituationDao.js.map