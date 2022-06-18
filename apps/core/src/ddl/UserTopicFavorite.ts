import { Entity, ManyToOne, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
import { Topic } from "./Topic";

@Entity()
@Table({ name: 'USER_TOPIC_FAVORITES' })
export class UserTopicFavorite
    extends AirEntity {

    favorite: boolean

    @ManyToOne()
    topic: Topic

}
