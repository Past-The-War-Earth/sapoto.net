import { AirEntity } from "@airport/final-approach";
import {
    Column,
    DbNumber,
    Entity,
    ManyToOne,
    Table
} from "@airport/tarmaq-entity";
import { Reply } from "./Reply";

@Entity()
@Table({ name: 'REPLY_RATINGS' })
export class ReplyRating
    extends AirEntity {

    @ManyToOne()
    reply: Reply

    @Column({ name: 'UP_OR_DOWN_RATING' })
    @DbNumber()
    upOrDownRating: 1 | 0 | -1

}
