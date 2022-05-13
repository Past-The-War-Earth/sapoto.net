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
        const situation = await this.situationApi.getNewSituation();
        const situationIn = situationThread.situation;
        if (situationIn.ageSuitability < 0 || situationIn.ageSuitability > 25) {
            throw new Error(`Invalid importance, must be between 0 & 25`);
        }
        let eMatrix = situationIn.eisenhowerMatrix;
        if (eMatrix.user.importance < 20 || eMatrix.user.importance > 100) {
            throw new Error(`Invalid importance, must be between 20 & 100`);
        }
        if (eMatrix.user.urgency < 20 || eMatrix.user.urgency > 100) {
            throw new Error(`Invalid urgency, must be between 20 & 100`);
        }
        situation.ageSuitability = situationIn.ageSuitability;
        situation.eisenhowerMatrix.importance = eMatrix.user.importance;
        situation.eisenhowerMatrix.urgency = eMatrix.user.urgency;
        situation.text = situationIn.text;
        situationThread.situation = situation;
        situationThread.replies = [];
        await this.situationApi.save(situation);
        situationThread.repository = situation.repository;
        await this.situationThreadDao.add(situationThread);
    }
    async addReply(reply) {
        await this.replyDao.save(reply);
    }
    async addIdea(reply, ideaSituation) {
        await this.ideaSituationApi.add(ideaSituation);
        await this.addReply(reply);
    }
    async rateReply(replyRating) {
        this.replyRatingDao.save(replyRating);
    }
    async addReplyType(reply, type) {
        const replyType = {
            reply,
            repository: reply.repository,
            type
        };
        await this.replyTypeDao.save(replyType);
        reply.replyTypes.push(replyType);
    }
};
__decorate([
    Inject()
], SituationThreadApi.prototype, "ideaSituationApi", void 0);
__decorate([
    Inject()
], SituationThreadApi.prototype, "replyDao", void 0);
__decorate([
    Inject()
], SituationThreadApi.prototype, "replyRatingDao", void 0);
__decorate([
    Inject()
], SituationThreadApi.prototype, "replyTypeDao", void 0);
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
], SituationThreadApi.prototype, "addReply", null);
__decorate([
    Api()
], SituationThreadApi.prototype, "addIdea", null);
__decorate([
    Api()
], SituationThreadApi.prototype, "rateReply", null);
__decorate([
    Api()
], SituationThreadApi.prototype, "addReplyType", null);
SituationThreadApi = __decorate([
    Injected()
], SituationThreadApi);
export { SituationThreadApi };
//# sourceMappingURL=SituationThreadApi.js.map