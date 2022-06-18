import { DbString, Entity, ManyToOne, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
import { Reply } from "./Reply";

@Entity()
@Table({ name: 'REPLY_TYPES' })
export class ReplyType
    extends AirEntity {

    @ManyToOne()
    reply: Reply

    @DbString()
    type: 'comment' | 'experience' | 'idea' | 'question'

}
