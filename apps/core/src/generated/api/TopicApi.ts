import {
	Api,
} from '@airport/air-traffic-control';
import {
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	TopicDao,
} from '../../dao/TopicDao';
import {
	Topic,
} from '../../ddl/Topic';
import {
	ApiProxy,
} from '@airport/airgate';
import {
	application,
} from '../../to_be_generated/app-declaration';



// An API stub for other Applications and UIs to use
// @Injected() is implied but not specified to avoid @airport/direction-indicator
// dependency in UI API stub (eventually, once it's @airport/autopilot is cleaned
// up)
// @Injected()
export class TopicApi extends ApiProxy<TopicApi> {

    constructor() {
        super(application, [])
    }
        
            
    async  findAll(): Promise<Topic[]> {
        return await this.proxy.findAll()
    }

    async  findOne(
        topicId: string | Topic
    ): Promise<Topic> {
        return await this.proxy.findOne(topicId)
    }

}
