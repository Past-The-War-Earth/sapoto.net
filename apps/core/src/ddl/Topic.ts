import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Situation } from "./Situation";
import { Theme } from "./Theme";

@Entity()
@Table({ name: 'TOPIC' })
export class Topic
    extends RepositoryEntity {

    name: string

    imagePath: string

    @ManyToOne()
    theme: Theme

    @OneToMany({ mappedBy: 'topic' })
    situations: Situation[]

}
