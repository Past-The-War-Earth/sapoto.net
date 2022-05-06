import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-traffic-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "@sapoto/core";
import { Reply } from "./Reply";

@Entity()
@Table({ name: 'SITUATION_THREADS' })
export class SituationThread
    extends RepositoryEntity {

    @ManyToOne()
    situation: Situation

    @OneToMany({ mappedBy: 'situationThread' })
    replies: Reply[]

}
