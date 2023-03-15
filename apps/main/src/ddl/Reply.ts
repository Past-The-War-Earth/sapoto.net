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
import { ReplyQuestionType } from "./ReplyQuestionType";
import { ReplyRating } from "./ReplyRating";
import { SituationThread } from "./SituationThread";
import { UserRating } from "./UserRating";

export type Reply_Type = 'comment' | 'experience' | 'idea' | 'question'

@Entity()
@Table({ name: 'REPLIES' })
export class Reply
    extends AirEntity {

    text: string = ''

    @Column({ name: 'IS_IDEA' })
    isIdea: boolean = false

    @Column({ name: 'IS_EXPERIENCE' })
    isExperience: boolean = false

    @Column({ name: 'IS_QUESTION' })
    isQuestion: boolean = false

    @Column({ name: 'NUMBER_OF_DOWN_RATINGS' })
    numberOfDownRatings: number = 0

    @Column({ name: 'NUMBER_OF_UP_RATINGS' })
    numberOfUpRatings: number = 0

    @Column({ name: 'NUMBER_OF_RATINGS' })
    numberRatings: number = 0

    @ManyToOne()
    situationThread: SituationThread

    @ManyToOne({ optional: true })
    parentReply?: Reply = null

    @ManyToOne({ optional: true })
    situationIdea?: SituationIdea = null

    @ManyToOne()
    userRating: UserRating = null

    @OneToMany({ mappedBy: 'parentReply' })
    childReplies?: Reply[] = []

    @OneToMany({ mappedBy: 'reply' })
    replyRatings?: ReplyRating[] = []

    @OneToMany({ mappedBy: 'reply' })
    replyQuestionTypes: ReplyQuestionType[]

    @Transient()
    userReplyRating?: ReplyRating = null

}
