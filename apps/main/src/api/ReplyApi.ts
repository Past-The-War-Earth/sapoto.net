import { Api } from "@airport/check-in"
import { Inject, Injected } from "@airport/direction-indicator"
import { IIdeaSituation, IdeaSituationApi } from "@votecube/votecube"
import { ReplyDao } from "../dao/ReplyDao"
import { ReplyRatingDao } from "../dao/ReplyRatingDao"
import { ReplyTypeDao } from "../dao/ReplyTypeDao"
import { Reply } from "../ddl/Reply"
import { ReplyRating } from "../ddl/ReplyRating"
import { ReplyType } from "../ddl/ReplyType"

@Injected()
export class ReplyApi {

    @Inject()
    ideaSituationApi: IdeaSituationApi

    @Inject()
    replyDao: ReplyDao

    @Inject()
    replyRatingDao: ReplyRatingDao

    @Inject()
    replyTypeDao: ReplyTypeDao


    @Api()
    async addReply(
        reply: Reply
    ): Promise<void> {
        await this.replyDao.save(reply)
    }

    @Api()
    async getRepliesForSituationThread(
        situationThreadId: string,
        userUuid: string
    ): Promise<Reply[]> {
        const replies = await this.replyDao.findForSituation(situationThreadId)

        for(const reply of replies) {
            reply.ratings = {
                down: 0,
                up: 0,
                user: {
                    rating: 0
                }
            }
            for(const replyRating of reply.replyRatings) {
                if(replyRating.rating > 0) {
                    reply.ratings.up += replyRating.rating
                } else {
                    reply.ratings.down += replyRating.rating
                }
                if(replyRating.actor.user.uuId === userUuid) {
                    reply.ratings.user.rating = replyRating.rating
                }
            }

            reply.urgency = {
                votes: 0,
                total: 0,
                user: {
                    urgency: 0
                }
            }
            reply.urgency.votes = reply.urgencyRatings.length
            for(const urgencyRating of reply.urgencyRatings) {
                reply.urgency.total = urgencyRating.rating
                if(urgencyRating.actor.user.uuId === userUuid) {
                    reply.urgency.user.urgency = urgencyRating.rating
                }
            }
        }

        return replies
    }

    @Api()
    async addIdea(
        reply: Reply,
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        await this.ideaSituationApi.add(ideaSituation)
        await this.addReply(reply)
    }

    @Api()
    async rateReply(
        replyRating: ReplyRating
    ): Promise<void> {
        this.replyRatingDao.save(replyRating)
    }

    @Api()
    async addReplyType(
        reply: Reply,
        type: 'comment' | 'experience' | 'idea' | 'question'
    ): Promise<void> {
        const replyType: ReplyType = {
            reply,
            repository: reply.repository,
            type
        } as any

        await this.replyTypeDao.save(replyType)
        reply.replyTypes.push(replyType as any)
    }

}