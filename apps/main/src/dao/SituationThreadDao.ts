import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { QSituation, QSituationRating, QTopic } from "@sapoto/core";
import { QUser } from "@airport/travel-document-checkpoint";
import { SituationThread } from "../ddl/SituationThread";
import {
    BaseSituationThreadDao,
    Q,
    QSituationThread,
    SituationThreadESelect
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
        topicUuId: string
    ): Promise<SituationThread[]> {
        let st: QSituationThread,
            s: QSituation,
            a: QActor,
            t: QTopic
        return await this._find({
            select: {
                '*': Y,
                actor: {
                    user: {
                        username: Y
                    }
                },
                situation: {
                    '*': Y,
                    ratings: {}
                }
            } as SituationThreadESelect,
            from: [
                st = Q.SituationThread,
                s = st.situation.innerJoin(),
                s.ratings.leftJoin(),
                a = st.actor.leftJoin(),
                a.user.leftJoin(),
                t = s.topic.leftJoin()
            ],
            where: t.equals(topicUuId)
        })
    }

    async findWithDetailsById(
        situationThreadId: string
    ): Promise<SituationThread> {
        let st: QSituationThread,
            s: QSituation,
            sR: QSituationRating,
            a: QActor,
            u: QUser
        return await this._findOne({
            select: {
                '*': Y,
                actor: {
                    user: {
                        username: Y
                    }
                },
                situation: {
                    '*': Y,
                    ratings: {}
                }
            },
            from: [
                st = Q.SituationThread,
                s = st.situation.innerJoin(),
                sR = s.ratings.leftJoin(),
                a = st.actor.leftJoin(),
                u = a.user.leftJoin()
            ],
            where: st.equals(situationThreadId)
        })
    }

}
