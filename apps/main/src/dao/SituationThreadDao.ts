import { ALL_FIELDS, and, Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { SituationThread } from "../ddl/SituationThread";
import {
    BaseSituationThreadDao,
    Q
} from "../generated/generated";

@Injected()
export class SituationThreadDao
    extends BaseSituationThreadDao {

    async add(
        situationThread: SituationThread
    ): Promise<void> {
        await this.save(situationThread)
    }

    async findWithListingDetailsForATopic(
        topicId: string
    ): Promise<SituationThread[]> {
        let alias = {} as any
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
                alias.st = Q.SituationThread,
                alias.s = alias.st.situation.innerJoin(),
                alias.sR = alias.s.ratings.leftJoin(),
                alias.a = alias.st.actor.leftJoin(),
                alias.u = alias.a.user.leftJoin()
            ],
            where: and(
                alias.s.topic.equals(topicId)
            )
        })
    }

}
