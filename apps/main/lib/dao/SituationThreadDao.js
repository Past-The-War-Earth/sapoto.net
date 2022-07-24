var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { PLUS, Y } from "@airport/tarmaq-query";
import { BaseSituationThreadDao, Q } from "../generated/generated";
let SituationThreadDao = class SituationThreadDao extends BaseSituationThreadDao {
    async add(situationThread) {
        await this.save(situationThread);
    }
    async findWithListingDetailsForATopic(topic) {
        let st, s, a, t;
        return await this._find({
            SELECT: {
                '*': Y,
                situation: {
                    '*': Y,
                    ratings: {}
                }
            },
            FROM: [
                st = Q.SituationThread,
                s = st.situation.INNER_JOIN(),
                s.ratings.LEFT_JOIN(),
                t = s.topic.LEFT_JOIN()
            ],
            WHERE: t.equals(topic)
        });
    }
    async findWithSituation(situationThread) {
        let st, s, sR, a, u;
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
        });
    }
    async updateReplyTypeTotals(numberOfIdeasDelta, numberOfExperiencesDelta, numberOfQuestionsDelta, situationThread) {
        if (!numberOfIdeasDelta && !numberOfExperiencesDelta
            && !numberOfQuestionsDelta) {
            return;
        }
        const st = Q.SituationThread;
        await this.db.updateWhere({
            UPDATE: st,
            SET: {
                numberOfIdeas: PLUS(st.numberOfIdeas, numberOfIdeasDelta),
                numberOfExperiences: PLUS(st.numberOfExperiences, numberOfExperiencesDelta),
                numberOfQuestions: PLUS(st.numberOfQuestions, numberOfQuestionsDelta),
            },
            WHERE: st.equals(situationThread)
        });
    }
    async updateReplyTotal(numberOfRepliesDelta, situationThread) {
        const st = Q.SituationThread;
        await this.db.updateWhere({
            UPDATE: st,
            SET: {
                numberOfReplies: PLUS(st.numberOfReplies, numberOfRepliesDelta),
            },
            WHERE: st.equals(situationThread)
        });
    }
};
SituationThreadDao = __decorate([
    Injected()
], SituationThreadDao);
export { SituationThreadDao };
//# sourceMappingURL=SituationThreadDao.js.map