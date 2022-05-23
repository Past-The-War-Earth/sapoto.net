import {
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	IIdeaSituation,
	IdeaSituationApi,
} from '@votecube/votecube';
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

    @Inject()
    replyApi: ReplyApi
    
    async  addReply(
        reply: Reply
    ): Promise<void> {
        await this.replyApi.addReply(reply)
    }

    async  getRepliesForSituationThread(
        situationThreadId: string
    ): Promise<Reply[]> {
        return await this.replyApi.getRepliesForSituationThread(situationThreadId)
    }

    async  addIdea(
        reply: Reply,
        ideaSituation: IIdeaSituation
    ): Promise<void> {
        await this.replyApi.addIdea(
            reply,
            ideaSituation
        )
    }

    async  rateReply(
        replyRating: ReplyRating
    ): Promise<void> {
        await this.replyApi.rateReply(replyRating)
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
