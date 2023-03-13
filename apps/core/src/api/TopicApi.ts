import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { TopicDao } from "../dao/TopicDao";
import { Topic } from "../ddl/Topic";

@Injected()
export class TopicApi {

    @Inject()
    topicDao: TopicDao

    @Api()
    async findAll(): Promise<Topic[]> {
        return await this.topicDao.findAll()
    }

    @Api()
    async findOne(
        topicId: string | Topic
    ): Promise<Topic> {
        return await this.topicDao.findOne(topicId)
    }

}
