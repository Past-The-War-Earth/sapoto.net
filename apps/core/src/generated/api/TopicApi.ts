import {
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	TopicDao,
} from '../../dao/TopicDao';
import {
	Topic,
} from '../../ddl/Topic';


// An API stub for other Applications and UIs to use
@Injected()
export class TopicApi {

    @Inject()
    topicApi: TopicApi
    
    async  findAll(): Promise<Topic[]> {
        return await this.topicApi.findAll()
    }

    async  getById(
        topicId: string
    ): Promise<Topic> {
        return await this.topicApi.getById(topicId)
    }

}
