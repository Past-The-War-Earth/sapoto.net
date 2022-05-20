import { ALL_FIELDS, and, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { QUser } from "@airport/travel-document-checkpoint";
import { ITopic, QSituation, QSituationRating } from "@sapoto/core";
import {
    BaseSituationThreadDao,
    IBaseSituationThreadDao,
    ISituationThread,
    Q,
    QSituationThread
} from "../generated/generated";

export interface ISituationThreadDao
    extends IBaseSituationThreadDao {

    add(
        situationThread: ISituationThread
    ): Promise<void>

    findWithListingDetailsForATopic(
        topicId: string
    ): Promise<ISituationThread[]>

}

@Injected()
export class SituationThreadDao
    extends BaseSituationThreadDao
    implements ISituationThreadDao {

    async add(
        situationThread: ISituationThread
    ): Promise<void> {
        await this.save(situationThread)
    }

    async findWithListingDetailsForATopic(
        topicId: string
    ): Promise<ISituationThread[]> {
        let st: QSituationThread
        let s: QSituation
        let sR: QSituationRating
        let a: QActor
        let u: QUser
        return await this.db.find.graph({
            select: {
                ...ALL_FIELDS,
                actor: {
                    user: {
                        username: Y
                    }
                },
                situation: {
                    ...ALL_FIELDS,
                    ratings: {}
                }
            },
            from: [
                st = Q.SituationThread,
                s = st.situation.innerJoin(),
                sR = s.ratings.leftJoin(),
                a = s.actor.leftJoin(),
                u = a.user.leftJoin()
            ],
            where: and(
                s.topic.equals(topicId)
            )
        })
    }

}
