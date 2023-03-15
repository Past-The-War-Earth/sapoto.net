import { AirEntity } from "@airport/final-approach";
import { Column, DbNumber, Entity, JoinColumn, ManyToOne, OneToMany, Table } from "@airport/tarmaq-entity";
import { UserAccount } from "@airport/travel-document-checkpoint";
import { Reply } from "./Reply";

export type UserRating_Ranking = number

@Entity()
@Table({ name: 'USER_RATINGS' })
export class UserRating
    extends AirEntity {

    @Column({ name: 'RANKING' })
    @DbNumber()
    ranking: UserRating_Ranking = 0

    @ManyToOne()
    @JoinColumn({
        name: 'USER_ACCOUNT_LID',
        referencedColumnName: 'USER_ACCOUNT_LID',
        nullable: false
    })
    userAccount: UserAccount

    @OneToMany({ mappedBy: 'userRating' })
    replies: Reply[] = []

}