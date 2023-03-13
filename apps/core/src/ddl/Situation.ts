import { AirEntity } from "@airport/final-approach";
import { Column, Entity, ManyToOne, OneToMany, Table, Transient } from "@airport/tarmaq-entity";
import { SituationRating } from "./SituationRating";
import { Topic } from "./Topic";

@Entity()
@Table({ name: 'SITUATIONS' })
export class Situation
    extends AirEntity {

    @Column({ name: 'TEXT', nullable: false })
    text: string

    @Column({ name: 'URGENCY_TOTAL' })
    urgencyTotal?: number

    @Column({ name: 'NUMBER_OF_URGENCY_RATINGS' })
    numberOfUrgencyRatings?: number

    @Column({ name: 'IMPORTANCE_TOTAL' })
    importanceTotal?: number

    @Column({ name: 'NUMBER_OF_IMPORTANCE_RATINGS' })
    numberOfImportanceRatings?: number

    @ManyToOne()
    topic: Topic

    @OneToMany({ mappedBy: 'situation' })
    ratings?: SituationRating[]

    @Transient()
    userRating?: SituationRating

}
