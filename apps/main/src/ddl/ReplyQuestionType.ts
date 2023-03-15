import { AirEntity } from "@airport/final-approach";
import { Entity, ManyToOne, Table } from "@airport/tarmaq-entity";
import { QuestionType } from "./QuestionType";
import { Reply } from "./Reply";

@Entity()
@Table({ name: 'REPLY_QUESTION_TYPE' })
export class ReplyQuestionType
    extends AirEntity {

    @ManyToOne()
    reply: Reply

    @ManyToOne()
    questionType: QuestionType

}
