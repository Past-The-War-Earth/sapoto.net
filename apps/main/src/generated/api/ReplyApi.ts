import {
	REPLY_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	AirRequest,
	IRequestManager,
} from '@airport/arrivals-n-departures';
import {
	Api,
} from '@airport/check-in';
import {
	SituationIdeaApi,
} from '@votecube/votecube';
import {
	ReplyDao,
} from '../../dao/ReplyDao';
import {
	ReplyRatingDao,
} from '../../dao/ReplyRatingDao';
import {
	SituationThreadDao,
} from '../../dao/SituationThreadDao';
import {
	Reply,
} from '../../ddl/Reply';
import {
	ReplyRating,
} from '../../ddl/ReplyRating';



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
        reply: Reply
    ): Promise<void> {
        await this.replyApi.addIdea(reply)
    }

    async  rateReply(
        replyRating: ReplyRating
    ): Promise<void> {
        await this.replyApi.rateReply(replyRating)
    }

    async  updateCounts(
        situationThreadUuId: string
    ): Promise<void> {
        await this.replyApi.updateCounts(situationThreadUuId)
    }

    async  setReplyType(
        reply: Reply,
        type: 'experience' | 'idea' | 'question'
    ): Promise<void> {
        await this.replyApi.setReplyType(
            reply,
            type
        )
    }

}
