import { Column, Entity, ManyToOne, OneToMany, Table, Transient } from "@airport/air-traffic-control";
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

    @Transient()
    eisenhowerMatrix: {
        importance: number
        urgency: number
        votes: number
        user: {
            importance: number
            urgency: number
        }
    }

}
