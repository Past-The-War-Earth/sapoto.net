import { Column, Entity, ManyToOne, OneToMany, Table, Transient } from "@airport/air-traffic-control";
import { AirEntity } from "@airport/holding-pattern";
import { SituationIdea } from "@votecube/votecube";
import { ReplyRating } from "./ReplyRating";
import { ReplyType } from "./ReplyType";
import { SituationThread } from "./SituationThread";

@Entity()
@Table({ name: 'REPLIES' })
export class Reply
    extends AirEntity {

    text: string

    @Column({ name: 'NUMBER_OF_DOWN_RATINGS' })
    numberOfDownRatings: number;

    @Column({ name: 'NUMBER_OF_UP_RATINGS' })
    numberOfUpRatings: number;

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

    @OneToMany({ mappedBy: 'reply' })
    replyTypes?: ReplyType[]

    @Transient()
    userRelyRating?: ReplyRating

}
