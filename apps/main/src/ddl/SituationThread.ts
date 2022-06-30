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
    numExperiences: number

    @Column({ name: 'NUMBER_OF_IDEAS' })
    numIdeas: number

    @Column({ name: 'NUMBER_OF_QUESTIONS' })
    numQuestions: number

    @Column({ name: 'NUMBER_OF_REASONS' })
    numReasons: number

    @Column({ name: 'NUMBER_OF_REPLIES' })
    numReplies: number

    @ManyToOne()
    situation: Situation

    @OneToMany({ mappedBy: 'situationThread' })
    replies: Reply[]

}
