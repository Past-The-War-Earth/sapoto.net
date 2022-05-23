import {
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

    @Inject()
    situationThreadApi: SituationThreadApi
    
    async  addSituationThread(
        situationThread: SituationThread
    ): Promise<void> {
        await this.situationThreadApi.addSituationThread(situationThread)
    }

    async  findWithListingDetailsForATopic(
        topicId: string
    ): Promise<SituationThread[]> {
        return await this.situationThreadApi.findWithListingDetailsForATopic(topicId)
    }

    async  findById(
        situationThreadId: string
    ): Promise<SituationThread> {
        return await this.situationThreadApi.findById(situationThreadId)
    }

}
