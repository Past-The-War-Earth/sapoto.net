var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from "@airport/direction-indicator";
import { SITUATION_API } from "../common-tokens";
let SituationApi = class SituationApi {
    async save(situation) {
        return await this.interAppApiClient.invokeApiMethod(SITUATION_API, 'save', [situation]);
    }
    async rateSituation(situation, importanceRating, urgencyRating, user) {
        return await this.interAppApiClient.invokeApiMethod(SITUATION_API, 'rateSituation', [situation, importanceRating, urgencyRating, user]);
    }
    async findWithListingDetailsForATopic(topic) {
        return await this.interAppApiClient.invokeApiMethod(SITUATION_API, 'findWithListingDetailsForATopic', [topic]);
    }
    async findWithListingDetailsForATheme(theme) {
        return await this.interAppApiClient.invokeApiMethod(SITUATION_API, 'findWithListingDetailsForATheme', [theme]);
    }
    async getNewSituation() {
        return await this.interAppApiClient.invokeApiMethod(SITUATION_API, 'getNewSituation', []);
    }
};
__decorate([
    Inject()
], SituationApi.prototype, "interAppApiClient", void 0);
SituationApi = __decorate([
    Injected()
], SituationApi);
export { SituationApi };
//# sourceMappingURL=SituationApi.js.map