import { DbNumber, Entity, ManyToOne, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Reply } from "./Reply";

@Entity()
@Table({ name: 'IDEA_URGENCY_RATINGS' })
export class IdeaUrgencyRating
    extends RepositoryEntity {

    @DbNumber()
    rating: 1 | 2 | 3 | 4 | 5

    @ManyToOne()
    reply: Reply

}
