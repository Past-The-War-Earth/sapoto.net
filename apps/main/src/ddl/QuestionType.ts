import { AirEntity } from "@airport/final-approach";
import { Column, DbString, Entity, OneToMany, Table } from "@airport/tarmaq-entity";
import { ReplyQuestionType } from "./ReplyQuestionType";

export type QuestionType_Type = 'What'
    | 'Which'
    | 'Who'
    | 'Where'
    | 'Why'
    | 'When'
    | 'How'
    | 'Whose'

@Entity()
@Table({ name: 'QUESTION_TYPE' })
export class QuestionType
    extends AirEntity {

    @Column({ name: 'TYPE' })
    @DbString()
    type: QuestionType_Type

    @OneToMany({ mappedBy: 'questionType' })
    replyQuestionTypes: ReplyQuestionType[]

}
