var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Inject, Injected } from "@airport/direction-indicator";
import { REPLY_API } from "../common-tokens";
let ReplyApi = class ReplyApi {
    async getRepliesForSituation(situation) {
        return await this.interAppApiClient.invokeApiMethod(REPLY_API, 'getRepliesForSituation', [situation]);
    }
    async addReply(reply) {
        return await this.interAppApiClient.invokeApiMethod(REPLY_API, 'addReply', [reply]);
    }
    async addIdea(reply, ideaSituation) {
        return await this.interAppApiClient.invokeApiMethod(REPLY_API, 'addIdea', [reply, ideaSituation]);
    }
    async rateReply(replyRating) {
        return await this.interAppApiClient.invokeApiMethod(REPLY_API, 'rateReply', [replyRating]);
    }
    async addReplyType(reply, type) {
        return await this.interAppApiClient.invokeApiMethod(REPLY_API, 'addReplyType', [reply, type]);
    }
};
__decorate([
    Inject()
], ReplyApi.prototype, "interAppApiClient", void 0);
ReplyApi = __decorate([
    Injected()
], ReplyApi);
export { ReplyApi };
//# sourceMappingURL=ReplyApi.js.map