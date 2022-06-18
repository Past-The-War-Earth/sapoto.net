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
    async getRepliesForSituationThread(situationThreadUuId) {
        return await this.replyDao.findForSituationThread(situationThreadUuId);
    }
    async addIdea(reply, situationIdea) {
        await this.situationIdeaApi.add(situationIdea);
        await this.addReply(reply);
    }
    async rateReply(replyRating, replyUuId, situationThreadUuId) {
        const reply = await this.replyDao.findByUuId(replyUuId);
        if (reply.uuId !== replyRating.reply.uuId) {
            throw new Error(`replyRating doesn't match replyUuId`);
        }
        const replyRatings = await this.replyRatingDao.findAllForSituationThread(situationThreadUuId);
        if (replyRatings.length) {
            if (reply.uuId !== replyRatings[0].reply.uuId) {
                throw new Error(`replyRating doesn't match situationThreadUuid`);
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
    // FIXME: Recompute all ratings and urgencies for a SituationThread when it's loaded
    // Do this only in non-server environments since the counts can be widely off across
    // different save branches
    async updateCounts(situationThreadUuId) {
        // const replies = this.replyDao.findAllForSituationThread(situationThreadUuId);
        // const ideaReplyUrgencies = ideaReplyUrgencyDao.findAllForSituationThread(situationThreadUuId);
        // const replyRatings = replyRatingDao.findAllForSituationThread(situationThreadUuId);
        // // Recompute all counts
        // await this.replyDao.save(replies)
    }
    async setReplyUrgency(ideaReplyUrgency, replyUuId, situationThreadId) {
        const reply = await this.replyDao.findByUuId(replyUuId);
        if (reply.uuId !== ideaReplyUrgency.reply.uuId) {
            throw new Error(`replyRating doesn't match replyUuId`);
        }
        const ideaReplyUrgencies = await this.ideaReplyUrgencyDao.findAllForSituationThread(situationThreadId);
        if (ideaReplyUrgencies.length) {
            if (reply.uuId !== ideaReplyUrgencies[0].reply.uuId) {
                throw new Error(`ideaReplyUrgency doesn't match situationThreadUuid`);
            }
        }
        await this.replyRatingDao.save(ideaReplyUrgency);
        let urgencyTotal = 0;
        let numberOfUrgencyRatings = 0;
        for (const ideaReplyUrgency of ideaReplyUrgencies) {
            numberOfUrgencyRatings++;
            urgencyTotal += ideaReplyUrgency.urgency;
        }
        reply.numberOfUrgencyRatings = numberOfUrgencyRatings;
        reply.urgencyTotal = urgencyTotal;
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
], ReplyApi.prototype, "ideaReplyUrgencyDao", void 0);
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
    Api(
    // { server: false }
    )
], ReplyApi.prototype, "updateCounts", null);
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