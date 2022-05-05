import { Entity, ManyToOne, Table } from "@airport/air-traffic-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Topic } from "./Topic";

@Entity()
@Table({ name: 'USER_TOPIC_FAVORITES' })
export class UserTopicFavorite
    extends RepositoryEntity {

    favorite: boolean

    @ManyToOne()
    topic: Topic

}
