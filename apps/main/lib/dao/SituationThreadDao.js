var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { BaseSituationThreadDao, Q } from "../generated/generated";
let SituationThreadDao = class SituationThreadDao extends BaseSituationThreadDao {
    async add(situationThread) {
        await this.save(situationThread);
    }
    async findWithListingDetailsForATopic(topicUuId) {
        let st, s, a, t;
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
            },
            from: [
                st = Q.SituationThread,
                s = st.situation.innerJoin(),
                s.ratings.leftJoin(),
                a = st.actor.leftJoin(),
                a.user.leftJoin(),
                t = s.topic.leftJoin()
            ],
            where: t.equals(topicUuId)
        });
    }
    async findWithDetailsById(situationThreadId) {
        let st, s, sR, a, u;
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
        });
    }
};
SituationThreadDao = __decorate([
    Injected()
], SituationThreadDao);
export { SituationThreadDao };
//# sourceMappingURL=SituationThreadDao.js.map