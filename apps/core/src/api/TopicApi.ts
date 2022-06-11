import { Api } from "@airport/check-in";
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
    async findByUuId(
        topicUuId: string
    ): Promise<Topic> {
        return await this.topicDao.findByUuId(topicUuId)
    }

}
