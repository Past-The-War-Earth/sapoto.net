import { DI } from "@airport/direction-indicator";
import { BaseTopicDao } from "../generated/baseDaos";
import { TOPIC_DAO } from "../server-tokens";
export class TopicDao extends BaseTopicDao {
}
DI.set(TOPIC_DAO, TopicDao);
//# sourceMappingURL=TopicDao.js.map