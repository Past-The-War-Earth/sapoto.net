var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { byId, exists, oneOfNumbers } from "@airbridge/validate";
import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
let ReplyApi = class ReplyApi {
    async addReply(reply) {
        const existingSituationThread = await this.situationThreadDao
            .findOne(reply.situationThread, true);
        if (!existingSituationThread) {
            return;
        }
        let existingParentReply;
        if (reply.parentReply) {
            existingParentReply = await this.replyDao.findOne(reply);
            if (!existingParentReply) {
                return;
            }
        }
        reply.numberOfDownRatings = 0;
        reply.numberOfUpRatings = 0;
        this.situationThreadDao.updateReplyTypeTotals(reply.isIdea ? 1 : 0, reply.isExperience ? 1 : 0, reply.isQuestion ? 1 : 0, existingSituationThread);
        await this.replyDao.save(reply);
    }
    async getRepliesForSituationThread(situationThreadId) {
        return await this.replyDao.findForSituationThread(situationThreadId);
    }
    async rateReply(replyRating) {
        // TODO: passed in but not validated properties throw errors
        // passed in relations are ignored and are removed, this is OK
        // since the object is copied at API passing time
        // On the way back all changes are copied over to the original
        // object that was passed into the API and the objects removed
        // by validation are left intact (on the original, passed in object) 
        await this.replyRatingDvo.validate(replyRating, {
            reply: exists(byId()),
            upOrDownRating: oneOfNumbers(-1, 0, 1)
        });
        const existingReplyRating = await this.replyRatingDao.findForReplyAndUser(replyRating.reply, this.requestManager.userAccount);
        let numberOfDownRatingsDelta = 0;
        let numberOfUpRatingsDelta = 0;
        if (existingReplyRating) {
            switch (existingReplyRating.upOrDownRating) {
                case -1:
                    switch (replyRating.upOrDownRating) {
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
                    switch (replyRating.upOrDownRating) {
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
                    switch (replyRating.upOrDownRating) {
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
            existingReplyRating.upOrDownRating = replyRating.upOrDownRating;
            replyRating = existingReplyRating;
        }
        await this.replyRatingDao.save(replyRating);
        await this.replyDao.updateUpOrDownRatingTotals(numberOfUpRatingsDelta, numberOfDownRatingsDelta, replyRating.reply);
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
    async setReplyType(reply, type) {
        const existingSituationThread = await this.situationThreadDao
            .findOne(reply.situationThread, true);
        if (!existingSituationThread) {
            return;
        }
        const existingReply = await this.replyDao.findOne(reply, true);
        if (!existingReply) {
            return;
        }
        let isExperience = existingReply.isExperience;
        let isIdea = existingReply.isIdea;
        let isQuestion = existingReply.isQuestion;
        let numberOfIdeasDelta = 0;
        let numberOfExperiencesDelta = 0;
        let numberOfQuestionsDelta = 0;
        switch (type) {
            case 'experience':
                if (isExperience) {
                    return;
                }
                isExperience = true;
                numberOfExperiencesDelta = 1;
                break;
            case 'idea':
                if (isIdea) {
                    return;
                }
                isIdea = true;
                numberOfIdeasDelta = 1;
                break;
            case 'question':
                if (isQuestion) {
                    return;
                }
                isQuestion = true;
                numberOfQuestionsDelta = 1;
                break;
        }
        await this.replyDao.setReplyType(isIdea, isExperience, isQuestion, reply);
        await this.situationThreadDao.updateReplyTypeTotals(numberOfIdeasDelta, numberOfExperiencesDelta, numberOfQuestionsDelta, existingSituationThread);
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
], ReplyApi.prototype, "replyDvo", void 0);
__decorate([
    Inject()
], ReplyApi.prototype, "replyRatingDao", void 0);
__decorate([
    Inject()
], ReplyApi.prototype, "replyRatingDvo", void 0);
__decorate([
    Inject()
], ReplyApi.prototype, "airRequest", void 0);
__decorate([
    Inject()
], ReplyApi.prototype, "requestManager", void 0);
__decorate([
    Inject()
], ReplyApi.prototype, "situationThreadDao", void 0);
__decorate([
    Api()
], ReplyApi.prototype, "addReply", null);
__decorate([
    Api()
], ReplyApi.prototype, "getRepliesForSituationThread", null);
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
], ReplyApi.prototype, "setReplyType", null);
ReplyApi = __decorate([
    Injected()
], ReplyApi);
export { ReplyApi };
//# sourceMappingURL=ReplyApi.js.map