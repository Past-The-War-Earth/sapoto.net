import { DI } from "@airport/di";
import { SITUATION_RATING_DAO } from "../server-tokens";
import { BaseSituationRatingDao, Q } from "../generated/generated";
import { and } from "@airport/air-control";
export class SituationRatingDao extends BaseSituationRatingDao {
    async findForSituationAndUser(situation, user) {
        let sir;
        let actor;
        let qUser;
        return await this.db.findOne.tree({
            select: {},
            from: [
                sir = Q.SituationRating,
                actor = sir.actor.innerJoin(),
                qUser = actor.user.innerJoin()
            ],
            where: and(sir.situation.equals(situation), qUser.uuId.equals(user.uuId))
        });
    }
}
DI.set(SITUATION_RATING_DAO, SituationRatingDao);
//# sourceMappingURL=SituationRatingDao.js.map