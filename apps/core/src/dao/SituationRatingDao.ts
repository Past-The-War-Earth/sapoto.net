import { Injected } from "@airport/direction-indicator";
import {
    IUser,
    QUser
} from "@airport/travel-document-checkpoint";
import {
    BaseSituationRatingDao,
    IBaseSituationRatingDao,
    ISituation,
    ISituationRating,
    QSituationRating,
    Q
} from "../generated/generated";
import { and } from "@airport/air-traffic-control";
import { QActor } from "@airport/holding-pattern";

export interface ISituationRatingDao
    extends IBaseSituationRatingDao {

    findForSituationAndUser(
        situation: ISituation,
        user: IUser
    ): Promise<ISituationRating>

}

@Injected()
export class SituationRatingDao
    extends BaseSituationRatingDao
    implements ISituationRatingDao {

    async findForSituationAndUser(
        situation: ISituation,
        user: IUser
    ): Promise<ISituationRating> {
        let sir: QSituationRating
        let actor: QActor
        let qUser: QUser
        return await this.db.findOne.tree({
            select: {},
            from: [
                sir = Q.SituationRating,
                actor = sir.actor.innerJoin(),
                qUser = actor.user.innerJoin()
            ],
            where: and(
                sir.situation.equals(situation),
                qUser.uuId.equals(user.uuId)
            )
        })
    }

}
