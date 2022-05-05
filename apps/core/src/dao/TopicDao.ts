import { DI } from "@airport/direction-indicator";
import { BaseTopicDao } from "../generated/baseDaos";
import { TOPIC_DAO } from "../server-tokens";

export interface ITopicDao {

}

export class TopicDao
    extends BaseTopicDao
    implements ITopicDao {

}
DI.set(TOPIC_DAO, TopicDao)
