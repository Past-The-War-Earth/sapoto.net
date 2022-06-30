import { Column, Entity, Json, ManyToOne, OneToMany, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
import { Situation } from "@sapoto/core";
import { ICounts } from "./ICounts";
import { Reply } from "./Reply";

@Entity()
@Table({ name: 'SITUATION_THREADS' })
export class SituationThread
    extends AirEntity {

    @Column({ name: 'NUMBER_OF_EXPERIENCES' })
    numberOfExperiences: number

    @Column({ name: 'NUMBER_OF_IDEAS' })
    numberOfIdeas: number

    @Column({ name: 'NUMBER_OF_QUESTIONS' })
    numberOfQuestions: number

    @Column({ name: 'NUMBER_OF_REPLIES' })
    numberOfReplies: number

    @ManyToOne()
    situation: Situation

    @OneToMany({ mappedBy: 'situationThread' })
    replies: Reply[]

}
