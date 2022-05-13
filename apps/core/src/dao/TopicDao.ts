import { Injected } from "@airport/direction-indicator";
import { BaseTopicDao, IBaseTopicDao } from "../generated/baseDaos";

export interface ITopicDao
    extends IBaseTopicDao {

}

@Injected()
export class TopicDao
    extends BaseTopicDao
    implements ITopicDao {

}
