var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { plus } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseSituationDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";
let SituationDao = class SituationDao extends BaseSituationDao {
    async updateShareTotal(situation, importanceDelta, urgencyDelta) {
        const s = Q.Situation;
        await this.db.updateWhere({
            update: s,
            set: {
                importanceTotal: plus(s.importanceTotal, importanceDelta.totalDelta),
                numberOfImportanceRatings: plus(s.numberOfImportanceRatings, importanceDelta.numberDelta),
                urgencyTotal: plus(s.urgencyTotal, urgencyDelta.totalDelta),
                numberOfUrgencyRatings: plus(s.numberOfUrgencyRatings, urgencyDelta.numberDelta),
            },
            where: s.equals(situation)
        });
    }
};
SituationDao = __decorate([
    Injected()
], SituationDao);
export { SituationDao };
//# sourceMappingURL=SituationDao.js.map