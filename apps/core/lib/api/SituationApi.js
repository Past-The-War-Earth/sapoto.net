var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { container, DI } from "@airport/direction-indicator";
import { SITUATION_DAO, SITUATION_RATING_DAO } from "../server-tokens";
import { SITUATION_API } from "../tokens";
export class SituationApi {
    async save(situation) {
        const situationDao = await container(this).get(SITUATION_DAO);
        await situationDao.save(situation);
    }
    async rateSituation(situation, importanceRating, urgencyRating, user) {
        const situationRatingDao = await container(this).get(SITUATION_RATING_DAO);
        let situationRating = await situationRatingDao
            .findForSituationAndUser(situation, user);
        if (!situationRating) {
            situationRating = {
                actorRecordId: null,
                actor: null,
                importanceRating,
                repository: situation.repository,
                situation,
                urgencyRating
            };
        }
        else {
            situationRating.importanceRating = importanceRating;
            situationRating.urgencyRating = urgencyRating;
        }
        await situationRatingDao.save(situationRating);
        return situationRating;
    }
}
__decorate([
    Api()
], SituationApi.prototype, "save", null);
__decorate([
    Api()
], SituationApi.prototype, "rateSituation", null);
DI.set(SITUATION_API, SituationApi);
//# sourceMappingURL=SituationApi.js.map