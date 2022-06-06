var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
let ReplyApi = class ReplyApi {
    async addReply(reply) {
        await this.replyDao.save(reply);
    }
    async getRepliesForSituationThread(situationThreadId) {
        return await this.replyDao.findForSituation(situationThreadId);
    }
    async addIdea(reply, situationIdea) {
        await this.situationIdeaApi.add(situationIdea);
        await this.addReply(reply);
    }
    async rateReply(replyRating, replyUuId, situationThreadId) {
        const reply = await this.replyDao.findByUuId(replyUuId);
        if (reply.id !== replyRating.reply.id) {
            throw new Error(`Reply doesn't match replyRating`);
        }
        const replyRatings = await this.replyRatingDao.findAllForSituationThread(situationThreadId);
        if (replyRatings.length) {
            if (reply.situationThread.id !== replyRating.reply.id) {
                throw new Error(`Reply doesn't match replyRating`);
            }
        }
        await this.replyRatingDao.save(replyRating);
        let numberOfDownRatings = 0;
        let numberOfUpRatings = 0;
        for (const replyRating of replyRatings) {
            if (replyRating.rating < 0) {
                numberOfDownRatings++;
            }
            else if (replyRating.rating > 0) {
                numberOfUpRatings++;
            }
        }
        reply.numberOfDownRatings = numberOfDownRatings;
        reply.numberOfUpRatings = numberOfUpRatings;
        await this.replyDao.save(reply);
    }
    async setReplyUrgency(ideaReplyUrgency, replyUuId, situationThreadId) {
        const reply = await this.replyDao.findByUuId(replyUuId);
        if (reply.id !== ideaReplyUrgency.reply.id) {
            throw new Error(`Reply doesn't match replyRating`);
        }
        const replyRatings = await this.replyRatingDao.findAllForSituationThread(situationThreadId);
        if (replyRatings.length) {
            if (reply.situationThread.id !== ideaReplyUrgency.reply.id) {
                throw new Error(`Reply doesn't match replyRating`);
            }
        }
        await this.replyRatingDao.save(ideaReplyUrgency);
        let numberOfDownRatings = 0;
        let numberOfUpRatings = 0;
        for (const replyRating of replyRatings) {
            if (replyRating.rating < 0) {
                numberOfDownRatings++;
            }
            else if (replyRating.rating > 0) {
                numberOfUpRatings++;
            }
        }
        reply.numberOfDownRatings = numberOfDownRatings;
        reply.numberOfUpRatings = numberOfUpRatings;
        await this.replyDao.save(reply);
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
], ReplyApi.prototype, "situationIdeaApi", void 0);
__decorate([
    Inject()
], ReplyApi.prototype, "replyDao", void 0);
__decorate([
    Inject()
], ReplyApi.prototype, "replyRatingDao", void 0);
__decorate([
    Inject()
], ReplyApi.prototype, "replyTypeDao", void 0);
__decorate([
    Api()
], ReplyApi.prototype, "addReply", null);
__decorate([
    Api()
], ReplyApi.prototype, "getRepliesForSituationThread", null);
__decorate([
    Api()
], ReplyApi.prototype, "addIdea", null);
__decorate([
    Api()
], ReplyApi.prototype, "rateReply", null);
__decorate([
    Api()
], ReplyApi.prototype, "setReplyUrgency", null);
__decorate([
    Api()
], ReplyApi.prototype, "addReplyType", null);
ReplyApi = __decorate([
    Injected()
], ReplyApi);
export { ReplyApi };
//# sourceMappingURL=ReplyApi.js.map