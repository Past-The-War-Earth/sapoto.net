import {
	SITUATION_THREAD_API,
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
	SituationApi,
} from '@sapoto/core';
import {
	SituationThreadDao,
} from '../../dao/SituationThreadDao';
import {
	SituationThread,
} from '../../ddl/SituationThread';



// An API stub for other Applications and UIs to use
@Injected()
export class SituationThreadApi {

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, SITUATION_THREAD_API)
    }
        
    @Inject()
    situationThreadApi: SituationThreadApi
            
    async  addSituationThread(
        situationThread: SituationThread
    ): Promise<void> {
        await this.situationThreadApi.addSituationThread(situationThread)
    }

    async  findWithListingDetailsForATopic(
        topicUuId: string
    ): Promise<SituationThread[]> {
        return await this.situationThreadApi.findWithListingDetailsForATopic(topicUuId)
    }

    async  findById(
        situationThreadUuId: string
    ): Promise<SituationThread> {
        return await this.situationThreadApi.findById(situationThreadUuId)
    }

}
