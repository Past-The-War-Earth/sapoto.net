import { Entity, ManyToOne, OneToMany, Table } from "@airport/air-traffic-control";
import { RepositoryEntity } from "@airport/holding-pattern";
import { Idea, IdeaSituation } from "@votecube/votecube/lib/app";
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

}
