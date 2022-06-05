import { DbNumber, Entity, ManyToOne, Table } from "@airport/air-traffic-control";
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
    
}
