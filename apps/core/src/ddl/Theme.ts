import { Entity, OneToMany, Table } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
import { Topic } from "./Topic";

@Entity()
@Table({ name: 'THEME' })
export class Theme
    extends AirEntity {

    name: string

    imageName: string

    @OneToMany({ mappedBy: 'theme' })
    topics: Topic[]

}
