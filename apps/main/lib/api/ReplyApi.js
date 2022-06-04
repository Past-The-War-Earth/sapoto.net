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
    async getRepliesForSituationThread(situationThreadId, userUuid) {
        const replies = await this.replyDao.findForSituation(situationThreadId);
        for (const reply of replies) {
            reply.ratings = {
                down: 0,
                up: 0,
                user: {
                    rating: 0
                }
            };
            for (const replyRating of reply.replyRatings) {
                if (replyRating.rating > 0) {
                    reply.ratings.up += replyRating.rating;
                }
                else {
                    reply.ratings.down += replyRating.rating;
                }
                if (replyRating.actor.user.uuId === userUuid) {
                    reply.ratings.user.rating = replyRating.rating;
                }
            }
            reply.urgency = {
                votes: 0,
                total: 0,
                user: {
                    urgency: 0
                }
            };
            reply.urgency.votes = reply.urgencyRatings.length;
            for (const urgencyRating of reply.urgencyRatings) {
                reply.urgency.total = urgencyRating.rating;
                if (urgencyRating.actor.user.uuId === userUuid) {
                    reply.urgency.user.urgency = urgencyRating.rating;
                }
            }
        }
        return replies;
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
], ReplyApi.prototype, "ideaSituationApi", void 0);
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
], ReplyApi.prototype, "addReplyType", null);
ReplyApi = __decorate([
    Injected()
], ReplyApi);
export { ReplyApi };
//# sourceMappingURL=ReplyApi.js.map