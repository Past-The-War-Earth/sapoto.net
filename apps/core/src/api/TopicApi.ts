import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { ITopicDao } from "../dao/TopicDao";
import { ITopic } from "../generated/topic";

export interface ITopicApi {

    findAll(): Promise<ITopic[]>

    getById(
        topicId: ITopic
    ): Promise<ITopic>

}

@Injected()
export class TopicApi
    implements ITopicApi {

    @Inject()
    topicDao: ITopicDao

    @Api()
    async findAll(): Promise<ITopic[]> {
        return await this.topicDao.findAll()
    }

    @Api()
    async getById(
        topicId: ITopic
    ): Promise<ITopic> {
        return await this.topicDao.findById(topicId)
    }
}
