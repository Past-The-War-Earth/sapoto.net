import { Entity, ManyToOne, OneToMany, Table, Transient } from "@airport/air-traffic-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { IdeaSituation } from "@votecube/votecube";
import { IdeaUrgencyRating } from "./IdeaUrgencyRating";
import { ReplyRating } from "./ReplyRating";
import { ReplyType } from "./ReplyType";
import { SituationThread } from "./SituationThread";

@Entity()
@Table({ name: 'REPLIES' })
export class Reply
    extends RepositoryEntity {

    @ManyToOne()
    situationThread: SituationThread

    @ManyToOne({ optional: true })
    parentReply: Reply

    @OneToMany({ mappedBy: 'parentReply' })
    childReplies: Reply[]

    @ManyToOne({ optional: true })
    ideaSituation: IdeaSituation

    @OneToMany({ mappedBy: 'reply' })
    replyRatings: ReplyRating[]

    @OneToMany({ mappedBy: 'reply' })
    replyTypes: ReplyType[]

    @OneToMany({ mappedBy: 'reply' })
    urgencyRatings: IdeaUrgencyRating[]

    @Transient()
    eisenhowerMatrix: {
        priority: number
        urgency: number
        votes: number
        user: {
            priority: number
            urgency: number
        }
    }

}
