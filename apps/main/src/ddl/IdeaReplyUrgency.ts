import { DbNumber, Entity, ManyToOne, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
import { Reply } from "./Reply";

@Entity()
@Table({ name: 'IDEA_REPLY_URGENCIES' })
export class IdeaReplyUrgency
    extends AirEntity {

    @DbNumber()
    urgency: 1 | 2 | 3 | 4 | 5

    @ManyToOne()
    reply: Reply

}
