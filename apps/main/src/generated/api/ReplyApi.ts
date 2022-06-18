import {
	REPLY_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	ISituationIdea,
	SituationIdeaApi,
} from '@votecube/votecube';
import {
	IdeaReplyUrgencyDao,
} from '../../dao/IdeaReplyUrgencyDao';
import {
	ReplyDao,
} from '../../dao/ReplyDao';
import {
	ReplyRatingDao,
} from '../../dao/ReplyRatingDao';
import {
	ReplyTypeDao,
} from '../../dao/ReplyTypeDao';
import {
	IdeaReplyUrgency,
} from '../../ddl/IdeaReplyUrgency';
import {
	Reply,
} from '../../ddl/Reply';
import {
	ReplyRating,
} from '../../ddl/ReplyRating';
import {
	ReplyType,
} from '../../ddl/ReplyType';



// An API stub for other Applications and UIs to use
@Injected()
export class ReplyApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, REPLY_API)
    }
        
    @Inject()
    replyApi: ReplyApi
            
    async  addReply(
        reply: Reply
    ): Promise<void> {
        await this.replyApi.addReply(reply)
    }

    async  getRepliesForSituationThread(
        situationThreadUuId: string
    ): Promise<Reply[]> {
        return await this.replyApi.getRepliesForSituationThread(situationThreadUuId)
    }

    async  addIdea(
        reply: Reply,
        situationIdea: ISituationIdea
    ): Promise<void> {
        await this.replyApi.addIdea(
            reply,
            situationIdea
        )
    }

    async  rateReply(
        replyRating: ReplyRating,
        replyUuId: string,
        situationThreadUuId: string
    ): Promise<void> {
        await this.replyApi.rateReply(
            replyRating,
            replyUuId,
            situationThreadUuId
        )
    }

    async  updateCounts(
        situationThreadUuId: string
    ): Promise<void> {
        await this.replyApi.updateCounts(situationThreadUuId)
    }

    async  setReplyUrgency(
        ideaReplyUrgency: IdeaReplyUrgency,
        replyUuId: string,
        situationThreadId: string
    ): Promise<void> {
        await this.replyApi.setReplyUrgency(
            ideaReplyUrgency,
            replyUuId,
            situationThreadId
        )
    }

    async  addReplyType(
        reply: Reply,
        type: 'comment' | 'experience' | 'idea' | 'question'
    ): Promise<void> {
        await this.replyApi.addReplyType(
            reply,
            type
        )
    }

}
