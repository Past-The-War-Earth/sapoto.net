var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
let SituationThreadApi = class SituationThreadApi {
    async addSituationThread(situationThread) {
        const situation = situationThread.situation;
        if (situation.ageSuitability < 0 || situation.ageSuitability > 25) {
            throw new Error(`Invalid importance, must be between 0 & 25`);
        }
        let eMatrix = situation.eisenhowerMatrix;
        if (eMatrix.user.importance < 1 || eMatrix.user.importance > 5) {
            throw new Error(`Invalid importance, must be between 1 & 5`);
        }
        if (eMatrix.user.urgency < 1 || eMatrix.user.urgency > 5) {
            throw new Error(`Invalid urgency, must be between 1 & 5`);
        }
        const topic = situation.topic;
        if (!topic || !topic.repository.id || !topic.actor.id
            || !topic.actorRecordId) {
            throw new Error(`No topic provided - missing topic or an id`);
        }
        await this.situationApi.save(situation);
        situationThread.repository = situation.repository;
        situationThread.replies = [];
        await this.situationThreadDao.add(situationThread);
    }
    async findWithListingDetailsForATopic(topicUuId) {
        return await this.situationThreadDao.findWithListingDetailsForATopic(topicUuId);
    }
    async findById(situationThreadUuId) {
        const situationThread = await this.situationThreadDao
            .findWithDetailsById(situationThreadUuId);
        if (!situationThread) {
            return null;
        }
        situationThread.counts = {
            experiences: 0,
            ideas: 0,
            questions: 0,
            reasons: 0,
            replies: 0
        };
        return situationThread;
    }
};
__decorate([
    Inject()
], SituationThreadApi.prototype, "situationApi", void 0);
__decorate([
    Inject()
], SituationThreadApi.prototype, "situationThreadDao", void 0);
__decorate([
    Api()
], SituationThreadApi.prototype, "addSituationThread", null);
__decorate([
    Api()
], SituationThreadApi.prototype, "findWithListingDetailsForATopic", null);
__decorate([
    Api()
], SituationThreadApi.prototype, "findById", null);
SituationThreadApi = __decorate([
    Injected()
], SituationThreadApi);
export { SituationThreadApi };
//# sourceMappingURL=SituationThreadApi.js.map