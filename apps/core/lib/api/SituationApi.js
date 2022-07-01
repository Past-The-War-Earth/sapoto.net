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
    async rateSituation(situation, importanceRating, urgencyRating) {
        if (importanceRating < 1) {
            throw new Error(`Invalid Importance Rating`);
        }
        else if (importanceRating > 5) {
            throw new Error(`Invalid Importance Rating`);
        }
        if (urgencyRating < 1) {
            throw new Error(`Invalid Urgency Rating`);
        }
        else if (urgencyRating > 5) {
            throw new Error(`Invalid Urgency Rating`);
        }
        importanceRating = Math.floor(importanceRating);
        urgencyRating = Math.floor(urgencyRating);
        const existingSituation = await this.situationDao.findByUuId(situation, true);
        if (!existingSituation) {
            throw new Error(`Situation ${situation.uuId} does not exist`);
        }
        let situationRating = await this.situationRatingDao
            .findForSituationAndUser(situation, this.requestManager.getUser());
        let importanceDelta = {
            totalDelta: importanceRating,
            numberDelta: 1
        };
        let urgencyDelta = {
            totalDelta: urgencyRating,
            numberDelta: 1
        };
        if (situationRating) {
            importanceDelta.totalDelta = importanceRating - situationRating.importanceRating;
            importanceDelta.numberDelta = 0;
            urgencyDelta.totalDelta = urgencyRating - situationRating.urgencyRating;
            urgencyDelta.numberDelta = 0;
            situationRating.importanceRating = importanceRating;
            situationRating.urgencyRating = urgencyRating;
        }
        else {
            situationRating = {
                importanceRating,
                repository: situation.repository,
                situation,
                urgencyRating,
                actor: this.requestManager.getActor()
            };
        }
        await this.situationDao.updateShareTotal(situation, importanceDelta, urgencyDelta);
        await this.situationRatingDao.save(situationRating);
        return situationRating;
    }
    async getNewSituation() {
        const situation = Object.assign(Object.assign({}, NEW_RECORD_FIELDS), { ageSuitability: 0, repository: null, text: '', topic: null, urgencyTotal: 0, numberOfUrgencyRatings: 0, importanceTotal: 0, numberOfImportanceRatings: 0 });
        const userRating = {
            importanceRating: 3,
            urgencyRating: 3,
            situation
        };
        situation.userRating = userRating;
        situation.ratings = [userRating];
        return situation;
    }
};
__decorate([
    Inject()
], SituationApi.prototype, "situationDao", void 0);
__decorate([
    Inject()
], SituationApi.prototype, "situationRatingDao", void 0);
__decorate([
    Inject()
], SituationApi.prototype, "requestManager", void 0);
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