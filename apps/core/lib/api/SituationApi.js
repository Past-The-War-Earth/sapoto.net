var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { between, exists, isInteger } from "@airbridge/validate";
import { NEW_RECORD_FIELDS } from "@airport/tarmaq-query";
let SituationApi = class SituationApi {
    async findById(situation) {
        return await this.situationDao.findOne(situation);
    }
    async save(situation) {
        const situationRating = await this.doRateSituation(situation, situation.userRating, false);
        await this.situationDao.save(situation);
        await this.situationRatingDao.save(situationRating);
    }
    async rateSituation(situation, situationRating) {
        return await this.doRateSituation(situation, situationRating, false);
    }
    async doRateSituation(situation, situationRating, isNewSituation) {
        await this.situationRatingDvo.validate(situationRating, {
            importanceRating: isInteger(between(1, 5)),
            urgencyRating: isInteger(between(1, 5))
        });
        let foundSituationRating;
        if (!isNewSituation) {
            await this.situationDvo.validate(situation, exists());
            foundSituationRating = await this.situationRatingDao
                .findForSituationAndUser(situation, this.requestManager.userAccount);
        }
        let importanceDelta = {
            totalDelta: situationRating.importanceRating,
            numberDelta: 1
        };
        let urgencyDelta = {
            totalDelta: situationRating.urgencyRating,
            numberDelta: 1
        };
        if (foundSituationRating) {
            importanceDelta.totalDelta = situationRating.importanceRating
                - situationRating.importanceRating;
            importanceDelta.numberDelta = 0;
            urgencyDelta.totalDelta = situationRating.urgencyRating
                - situationRating.urgencyRating;
            urgencyDelta.numberDelta = 0;
            foundSituationRating.importanceRating = situationRating.importanceRating;
            foundSituationRating.urgencyRating = situationRating.urgencyRating;
        }
        else {
            situationRating.repository = situation.repository,
                situationRating.situation = situation;
            situationRating.actor = this.requestManager.actor;
        }
        if (isNewSituation) {
            situation.importanceTotal = situationRating.importanceRating;
            situation.numberOfImportanceRatings = 1;
            situation.urgencyTotal = situationRating.urgencyRating;
            situation.numberOfUrgencyRatings = 1;
        }
        else {
            await this.situationDao.updateShareTotal(situation, importanceDelta, urgencyDelta);
            await this.situationRatingDao.save(situationRating);
        }
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
], SituationApi.prototype, "requestManager", void 0);
__decorate([
    Inject()
], SituationApi.prototype, "situationDao", void 0);
__decorate([
    Inject()
], SituationApi.prototype, "situationDvo", void 0);
__decorate([
    Inject()
], SituationApi.prototype, "situationRatingDao", void 0);
__decorate([
    Inject()
], SituationApi.prototype, "situationRatingDvo", void 0);
__decorate([
    Api()
], SituationApi.prototype, "findById", null);
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