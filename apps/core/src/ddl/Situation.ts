import { Column, Entity, ManyToOne, OneToMany, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { SituationRating } from "./SituationRating";
import { Topic } from "./Topic";

@Entity()
@Table({ name: 'SITUATIONS' })
export class Situation extends RepositoryEntity {

    @Column({ name: 'TEXT', nullable: false })
    text: string

    @ManyToOne()
    topic: Topic

    @OneToMany({ mappedBy: 'situation' })
    ratings: SituationRating[]

}
