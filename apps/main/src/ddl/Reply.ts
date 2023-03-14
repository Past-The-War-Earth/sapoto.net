import { AirEntity } from "@airport/final-approach";
import {
    Column,
    Entity,
    ManyToOne,
    OneToMany,
    Table,
    Transient
} from "@airport/tarmaq-entity";
import { SituationIdea } from "@votecube/votecube";
import { ReplyRating } from "./ReplyRating";
import { SituationThread } from "./SituationThread";

@Entity()
@Table({ name: 'REPLIES' })
export class Reply
    extends AirEntity {

    text: string

    @Column({ name: 'IS_IDEA' })
    isIdea: boolean

    @Column({ name: 'IS_EXPERIENCE' })
    isExperience: boolean

    @Column({ name: 'IS_QUESTION' })
    isQuestion: boolean

    @Column({ name: 'NUMBER_OF_DOWN_RATINGS' })
    numberOfDownRatings: number

    @Column({ name: 'NUMBER_OF_UP_RATINGS' })
    numberOfUpRatings: number

    @ManyToOne()
    situationThread: SituationThread

    @ManyToOne({ optional: true })
    parentReply?: Reply

    @ManyToOne({ optional: true })
    situationIdea?: SituationIdea

    @OneToMany({ mappedBy: 'parentReply' })
    childReplies?: Reply[]

    @OneToMany({ mappedBy: 'reply' })
    replyRatings?: ReplyRating[]

    @Transient()
    userRelyRating?: ReplyRating

}
