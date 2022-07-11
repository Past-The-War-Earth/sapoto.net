import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { plus, Y } from "@airport/tarmaq-query";
import { QSituation, QSituationRating, QTopic, Topic } from "@sapoto/core";
import { QUserAccount } from "@airport/travel-document-checkpoint";
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
        topic: Topic | string
    ): Promise<SituationThread[]> {
        let st: QSituationThread,
            s: QSituation,
            a: QActor,
            t: QTopic
        return await this._find({
            select: {
                '*': Y,
                situation: {
                    '*': Y,
                    ratings: {}
                }
            } as SituationThreadESelect,
            from: [
                st = Q.SituationThread,
                s = st.situation.innerJoin(),
                s.ratings.leftJoin(),
                t = s.topic.leftJoin()
            ],
            where: t.equals(topic)
        })
    }

    async findWithSituation(
        situationThread: SituationThread | string
    ): Promise<SituationThread> {
        let st: QSituationThread,
            s: QSituation,
            sR: QSituationRating,
            a: QActor,
            u: QUserAccount
        return await this._findOne({
            select: {
                '*': Y,
                actor: {
                    userAccount: {
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
                sR = s.ratings.leftJoin()
            ],
            where: st.equals(situationThread)
        })
    }

    async updateReplyTypeTotals(
        numberOfIdeasDelta: number,
        numberOfExperiencesDelta: number,
        numberOfQuestionsDelta: number,
        situationThread: SituationThread
    ): Promise<void> {
        if (!numberOfIdeasDelta && !numberOfExperiencesDelta
            && !numberOfQuestionsDelta) {
            return
        }
        const st = Q.SituationThread
        await this.db.updateWhere({
            update: st,
            set: {
                numberOfIdeas: plus(st.numberOfIdeas, numberOfIdeasDelta),
                numberOfExperiences: plus(st.numberOfExperiences, numberOfExperiencesDelta),
                numberOfQuestions: plus(st.numberOfQuestions, numberOfQuestionsDelta),
            },
            where: st.equals(situationThread)
        })
    }

    async updateReplyTotal(
        numberOfRepliesDelta: number,
        situationThread: SituationThread
    ): Promise<void> {
        const st = Q.SituationThread
        await this.db.updateWhere({
            update: st,
            set: {
                numberOfReplies: plus(st.numberOfReplies, numberOfRepliesDelta),
            },
            where: st.equals(situationThread)
        })
    }

}
