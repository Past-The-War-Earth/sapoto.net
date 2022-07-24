import { Injected } from "@airport/direction-indicator";
import { QActor } from "@airport/holding-pattern";
import { PLUS, Y } from "@airport/tarmaq-query";
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
            SELECT: {
                '*': Y,
                situation: {
                    '*': Y,
                    ratings: {}
                }
            } as SituationThreadESelect,
            FROM: [
                st = Q.SituationThread,
                s = st.situation.INNER_JOIN(),
                s.ratings.LEFT_JOIN(),
                t = s.topic.LEFT_JOIN()
            ],
            WHERE: t.equals(topic)
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
            SELECT: {
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
            FROM: [
                st = Q.SituationThread,
                s = st.situation.INNER_JOIN(),
                sR = s.ratings.LEFT_JOIN()
            ],
            WHERE: st.equals(situationThread)
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
            UPDATE: st,
            SET: {
                numberOfIdeas: PLUS(st.numberOfIdeas, numberOfIdeasDelta),
                numberOfExperiences: PLUS(st.numberOfExperiences, numberOfExperiencesDelta),
                numberOfQuestions: PLUS(st.numberOfQuestions, numberOfQuestionsDelta),
            },
            WHERE: st.equals(situationThread)
        })
    }

    async updateReplyTotal(
        numberOfRepliesDelta: number,
        situationThread: SituationThread
    ): Promise<void> {
        const st = Q.SituationThread
        await this.db.updateWhere({
            UPDATE: st,
            SET: {
                numberOfReplies: PLUS(st.numberOfReplies, numberOfRepliesDelta),
            },
            WHERE: st.equals(situationThread)
        })
    }

}
