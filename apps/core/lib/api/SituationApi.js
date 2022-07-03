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
    async findById(situation) {
        return await this.situationDao.findByUuId(situation);
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
        if (situationRating.importanceRating < 1) {
            throw new Error(`Invalid Importance Rating`);
        }
        else if (situationRating.importanceRating > 5) {
            throw new Error(`Invalid Importance Rating`);
        }
        if (situationRating.urgencyRating < 1) {
            throw new Error(`Invalid Urgency Rating`);
        }
        else if (situationRating.urgencyRating > 5) {
            throw new Error(`Invalid Urgency Rating`);
        }
        situationRating.importanceRating = Math.floor(situationRating.importanceRating);
        situationRating.urgencyRating = Math.floor(situationRating.urgencyRating);
        let foundSituation;
        let foundSituationRating;
        if (isNewSituation) {
            foundSituation = situation;
        }
        else {
            foundSituation = await this.situationDao.findByUuId(situation, true);
            if (!foundSituation) {
                throw new Error(`Situation ${situation.uuId} does not exist`);
            }
            situationRating = await this.situationRatingDao
                .findForSituationAndUser(situation, this.requestManager.getUser());
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
            situationRating.actor = this.requestManager.getActor();
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
], SituationApi.prototype, "situationRatingDao", void 0);
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