var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from "@airport/direction-indicator";
import { SITUATION_THREAD_API } from "../common-tokens";
let SituationThreadApi = class SituationThreadApi {
    async addSituationThread(situationThread) {
        return await this.interAppApiClient.invokeApiMethod(SITUATION_THREAD_API, 'addSituationThread', [situationThread]);
    }
    async findWithListingDetailsForATopic(topicId) {
        return await this.interAppApiClient.invokeApiMethod(SITUATION_THREAD_API, 'findWithListingDetailsForATopic', [topicId]);
    }
};
__decorate([
    Inject()
], SituationThreadApi.prototype, "interAppApiClient", void 0);
SituationThreadApi = __decorate([
    Injected()
], SituationThreadApi);
export { SituationThreadApi };
//# sourceMappingURL=SituationThreadApi.js.map