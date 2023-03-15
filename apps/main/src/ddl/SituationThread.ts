import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    Table
} from "@airport/tarmaq-entity";
import { AirEntity } from "@airport/final-approach";
import { Situation } from "@sapoto/core";
import { Reply } from "./Reply";

@Entity()
@Table({ name: 'SITUATION_THREADS' })
export class SituationThread
    extends AirEntity {

    @Column({ name: 'NUMBER_OF_EXPERIENCES' })
    numberOfExperiences: number = 0

    @Column({ name: 'NUMBER_OF_IDEAS' })
    numberOfIdeas: number = 0

    @Column({ name: 'NUMBER_OF_QUESTIONS' })
    numberOfQuestions: number = 0

    @Column({ name: 'NUMBER_OF_REPLIES' })
    numberOfReplies: number = 0

    @ManyToOne()
    situation: Situation

    @OneToMany({ mappedBy: 'situationThread' })
    replies: Reply[] = []

}
