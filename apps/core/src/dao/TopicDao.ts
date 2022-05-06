import { Injected } from "@airport/direction-indicator";
import { BaseTopicDao } from "../generated/baseDaos";

export interface ITopicDao {

}

@Injected()
export class TopicDao
    extends BaseTopicDao
    implements ITopicDao {

}
