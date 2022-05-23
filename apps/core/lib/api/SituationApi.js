var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NEW_RECORD_FIELDS } from '@airport/air-traffic-control';
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
let SituationApi = class SituationApi {
    async save(situation) {
        await this.situationDao.save(situation);
    }
    async rateSituation(situation, importanceRating, urgencyRating, user) {
        let situationRating = await this.situationRatingDao
            .findForSituationAndUser(situation, user);
        if (!situationRating) {
            situationRating = Object.assign(Object.assign({}, NEW_RECORD_FIELDS), { importanceRating, repository: situation.repository, situation,
                urgencyRating });
        }
        else {
            situationRating.importanceRating = importanceRating;
            situationRating.urgencyRating = urgencyRating;
        }
        await this.situationRatingDao.save(situationRating);
        return situationRating;
    }
    async getNewSituation() {
        return Object.assign(Object.assign({}, NEW_RECORD_FIELDS), { ageSuitability: 0, repository: null, eisenhowerMatrix: {
                importance: 0,
                urgency: 0,
                votes: 0,
                user: {
                    importance: 0,
                    urgency: 0
                }
            }, text: '', topic: null });
    }
};
__decorate([
    Inject()
], SituationApi.prototype, "situationDao", void 0);
__decorate([
    Inject()
], SituationApi.prototype, "situationRatingDao", void 0);
__decorate([
    Api()
], SituationApi.prototype, "save", null);
__decorate([
    Api()
], SituationApi.prototype, "rateSituation", null);
__decorate([
    Api()
], SituationApi.prototype, "getNewSituation", null);
SituationApi = __decorate([
    Injected()
], SituationApi);
export { SituationApi };
//# sourceMappingURL=SituationApi.js.map