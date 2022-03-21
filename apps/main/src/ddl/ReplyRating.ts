import { DbNumber, Entity, ManyToOne, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Reply } from "./Reply";

@Entity()
@Table({ name: 'REPLY_RATING' })
export class ReplyRating
    extends RepositoryEntity {

    @ManyToOne()
    reply: Reply

    @DbNumber()
    rating: 1 | 0 | -1

    @DbNumber()
    urgency: 1 | 2 | 3 | 4 | 5
}
