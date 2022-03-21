import { Column, DbNumber, Entity, ManyToOne, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "./Situation";

@Entity()
@Table({ name: 'SITUATION_RATINGS' })
export class SituationRating
    extends RepositoryEntity {

    @Column({ name: 'IMPORTANCE_RATING' })
    @DbNumber()
    importanceRating: 1 | 2 | 3 | 4 | 5

    @Column({ name: 'URGENCY_RATING' })
    @DbNumber()
    urgencyRating: 1 | 2 | 3 | 4 | 5

    @ManyToOne()
    situation: Situation

}
