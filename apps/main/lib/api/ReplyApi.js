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
        const reply = await this.replyDao.findByUuId(replyRating.reply.uuId, true);
        const existingReplyRating = await this.replyRatingDao.findForReplyAndUser(replyRating.reply, (await this.requestManager.getRequest()).user);
        let numberOfDownRatingsDelta = 0;
        let numberOfUpRatingsDelta = 0;
        if (existingReplyRating) {
            switch (existingReplyRating.rating) {
                case -1:
                    switch (replyRating.rating) {
                        case -1:
                            break;
                        case 0:
                            numberOfDownRatingsDelta = -1;
                            break;
                        case 1:
                            numberOfDownRatingsDelta = -1;
                            numberOfUpRatingsDelta = 1;
                            break;
                    }
                    break;
                case 0:
                    switch (replyRating.rating) {
                        case -1:
                            numberOfDownRatingsDelta = 1;
                            break;
                        case 0:
                            break;
                        case 1:
                            numberOfUpRatingsDelta = 1;
                            break;
                    }
                    break;
                case 1:
                    switch (replyRating.rating) {
                        case -1:
                            numberOfDownRatingsDelta = 1;
                            numberOfUpRatingsDelta = -1;
                            break;
                        case 0:
                            numberOfUpRatingsDelta = -1;
                            break;
                        case 1:
                            break;
                    }
                    break;
            }
            existingReplyRating.rating = replyRating.rating;
            replyRating = existingReplyRating;
        }
        await this.replyRatingDao.save(replyRating);
        await this.replyDao.updateRatingTotals(numberOfUpRatingsDelta, numberOfDownRatingsDelta, reply);
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
], ReplyApi.prototype, "replyTypeDao", void 0);
__decorate([
    Inject()
], ReplyApi.prototype, "airRequest", void 0);
__decorate([
    Inject()
], ReplyApi.prototype, "requestManager", void 0);
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
], ReplyApi.prototype, "addReplyType", null);
ReplyApi = __decorate([
    Injected()
], ReplyApi);
export { ReplyApi };
//# sourceMappingURL=ReplyApi.js.map