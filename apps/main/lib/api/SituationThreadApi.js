var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { transactional } from "@airport/tower";
import { container, DI } from "@airport/di";
import { SITUATION_API } from "@sapoto/core/lib/app";
import { IDEA_SITUATION_API } from '@votecube/votecube/lib/app';
import { SITUATION_THREAD_API, } from "../tokens";
import { REPLY_DAO, REPLY_RATING_DAO, REPLY_TYPE_DAO, SITUATION_THREAD_DAO } from "../server-tokens";
export class SituationThreadApi {
    async addSituationThread(situationThread) {
        // start transactional
        const [situationApi, situationThreadDao] = await container(this).get(SITUATION_API, SITUATION_THREAD_DAO);
        await situationApi.save(situationThread.situation);
        await situationThreadDao.add(situationThread);
    }
    async addReply(reply) {
        const replyDao = await container(this).get(REPLY_DAO);
        await replyDao.save(reply);
    }
    async addIdea(reply, ideaSituation) {
        const ideaSituationApi = await container(this).get(IDEA_SITUATION_API);
        transactional(async () => {
            ideaSituationApi.add(ideaSituation);
            await this.addReply(reply);
        });
    }
    async rateReply(replyRating) {
        const replyRatingDao = await container(this).get(REPLY_RATING_DAO);
        replyRatingDao.save(replyRating);
    }
    async addReplyType(reply, type) {
        const replyType = {
            reply,
            repository: reply.repository,
            type
        };
        const replyTypeDao = await container(this).get(REPLY_TYPE_DAO);
        await replyTypeDao.save(replyType);
        reply.replyTypes.push(replyType);
    }
}
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
DI.set(SITUATION_THREAD_API, SituationThreadApi);
//# sourceMappingURL=SituationThreadApi.js.map