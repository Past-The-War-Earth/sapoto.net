import { DbString, Entity, ManyToOne, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Reply } from "./Reply";

@Entity()
@Table({ name: 'REPLY_TYPES' })
export class ReplyType
    extends RepositoryEntity {

    @ManyToOne()
    reply: Reply

    @DbString()
    type: 'comment' | 'experience' | 'idea' | 'question'

}
