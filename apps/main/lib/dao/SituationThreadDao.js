var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { plus, Y } from "@airport/tarmaq-query";
import { BaseSituationThreadDao, Q } from "../generated/generated";
let SituationThreadDao = class SituationThreadDao extends BaseSituationThreadDao {
    async add(situationThread) {
        await this.save(situationThread);
    }
    async findWithListingDetailsForATopic(topic) {
        let st, s, a, t;
        return await this._find({
            select: {
                '*': Y,
                situation: {
                    '*': Y,
                    ratings: {}
                }
            },
            from: [
                st = Q.SituationThread,
                s = st.situation.innerJoin(),
                s.ratings.leftJoin(),
                t = s.topic.leftJoin()
            ],
            where: t.equals(topic)
        });
    }
    async findWithSituation(situationThread) {
        let st, s, sR, a, u;
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
        });
    }
    async updateReplyTypeTotals(numberOfIdeasDelta, numberOfExperiencesDelta, numberOfQuestionsDelta, situationThread) {
        if (!numberOfIdeasDelta && !numberOfExperiencesDelta
            && !numberOfQuestionsDelta) {
            return;
        }
        const st = Q.SituationThread;
        await this.db.updateWhere({
            update: st,
            set: {
                numberOfIdeas: plus(st.numberOfIdeas, numberOfIdeasDelta),
                numberOfExperiences: plus(st.numberOfExperiences, numberOfExperiencesDelta),
                numberOfQuestions: plus(st.numberOfQuestions, numberOfQuestionsDelta),
            },
            where: st.equals(situationThread)
        });
    }
    async updateReplyTotal(numberOfRepliesDelta, situationThread) {
        const st = Q.SituationThread;
        await this.db.updateWhere({
            update: st,
            set: {
                numberOfReplies: plus(st.numberOfReplies, numberOfRepliesDelta),
            },
            where: st.equals(situationThread)
        });
    }
};
SituationThreadDao = __decorate([
    Injected()
], SituationThreadDao);
export { SituationThreadDao };
//# sourceMappingURL=SituationThreadDao.js.map