var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { REPLY_API, } from '../../to_be_generated/common-tokens';
import { DEPENDENCY_INJECTION, Inject, Injected, } from '@airport/direction-indicator';
// An API stub for other Applications and UIs to use
let ReplyApi = class ReplyApi {
    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, REPLY_API);
    }
    async addReply(reply) {
        await this.replyApi.addReply(reply);
    }
    async getRepliesForSituationThread(situationThreadId) {
        return await this.replyApi.getRepliesForSituationThread(situationThreadId);
    }
    async rateReply(replyRating) {
        await this.replyApi.rateReply(replyRating);
    }
    async updateCounts(situationThreadUuId) {
        await this.replyApi.updateCounts(situationThreadUuId);
    }
    async setReplyType(reply, type) {
        await this.replyApi.setReplyType(reply, type);
    }
};
__decorate([
    Inject()
], ReplyApi.prototype, "replyApi", void 0);
ReplyApi = __decorate([
    Injected()
], ReplyApi);
export { ReplyApi };
//# sourceMappingURL=ReplyApi.js.map