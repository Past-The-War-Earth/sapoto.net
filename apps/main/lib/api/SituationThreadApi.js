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
        await this.situationApi.save(situationThread.situation);
        situationThread.repository = situationThread.situation.repository;
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