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
    async addIdea(reply) {
        await this.situationIdeaApi.add(reply.situationIdea);
        await this.addReply(reply);
    }
    async rateReply(replyRating) {
        if (replyRating.rating > 0) {
            replyRating.rating = 1;
        }
        else if (replyRating.rating < 0) {
            replyRating.rating = -1;
        }
        else {
            replyRating.rating = 0;
        }
        const replyRatings = await this.replyRatingDao.findAllForReply(replyRating.reply.uuId);
        let numberOfDownRatings = 0;
        let numberOfUpRatings = 0;
        let userPreviouslyRated = false;
        for (const existingReplyRating of replyRatings) {
            if (replyRating.actor.user.uuId === existingReplyRating.actor.user.uuId) {
                existingReplyRating.rating = replyRating.rating;
                replyRating = existingReplyRating;
                userPreviouslyRated = true;
            }
            if (existingReplyRating.rating < 0) {
                numberOfDownRatings++;
            }
            else if (existingReplyRating.rating > 0) {
                numberOfUpRatings++;
            }
        }
        if (!userPreviouslyRated) {
            if (replyRating.rating < 0) {
                numberOfDownRatings++;
            }
            else if (replyRating.rating > 0) {
                numberOfUpRatings++;
            }
        }
        await this.replyRatingDao.save(replyRating);
        const reply = await this.replyDao.findByUuId(replyRating.reply.uuId);
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
    async setReplyUrgency(ideaReplyUrgency) {
        if (ideaReplyUrgency.urgency < 1) {
            ideaReplyUrgency.urgency = 1;
        }
        else if (ideaReplyUrgency.urgency > 5) {
            ideaReplyUrgency.urgency = 5;
        }
        ideaReplyUrgency.urgency = Math.floor(ideaReplyUrgency.urgency);
        const ideaReplyUrgencies = await this.ideaReplyUrgencyDao
            .findAllForReply(ideaReplyUrgency.reply.uuId);
        let urgencyTotal = 0;
        let numberOfUrgencyRatings = 0;
        for (const existingIdeaReplyUrgency of ideaReplyUrgencies) {
            if (existingIdeaReplyUrgency.actor.user.uuId === ideaReplyUrgency.actor.user.uuId) {
                existingIdeaReplyUrgency.urgency = ideaReplyUrgency.urgency;
                ideaReplyUrgency = existingIdeaReplyUrgency;
            }
            numberOfUrgencyRatings++;
            urgencyTotal += existingIdeaReplyUrgency.urgency;
        }
        await this.replyRatingDao.save(ideaReplyUrgency);
        const reply = await this.replyDao.findByUuId(ideaReplyUrgency.reply.uuId);
        reply.numberOfUrgencyRatings = numberOfUrgencyRatings;
        reply.urgencyTotal = urgencyTotal;
        await this.replyDao.save(reply);
    }
    async addReplyType(reply, type) {
        const existingReplyTypes = await this.replyTypeDao.getAllForReply(reply.uuId);
        for (const existingReplyType of existingReplyTypes) {
            if (existingReplyType.type === type) {
                return;
            }
        }
        const replyType = {
            actor: this.airRequest.actor,
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
    Inject()
], ReplyApi.prototype, "airRequest", void 0);
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