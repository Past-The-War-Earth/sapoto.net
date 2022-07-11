import { AirEntity } from "@airport/holding-pattern";
import { Entity, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { Situation } from "./Situation";
import { Theme } from "./Theme";

@Entity()
@Table({ name: 'TOPIC' })
export class Topic
    extends AirEntity {

    name: string

    imagePath: string

    @ManyToOne()
    theme: Theme

    @OneToMany({ mappedBy: 'topic' })
    situations: Situation[]

}
