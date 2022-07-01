import { Injected } from "@airport/direction-indicator";
import {
    User,
    QUser
} from "@airport/travel-document-checkpoint";
import {
    BaseSituationRatingDao,
    QSituation,
    QSituationRating,
    Q
} from "../generated/generated";
import { and } from "@airport/air-traffic-control";
import { QActor } from "@airport/holding-pattern";
import { SituationRating } from "../ddl/SituationRating";
import { AirEntityUuId } from "@airport/aviation-communication";

@Injected()
export class SituationRatingDao
    extends BaseSituationRatingDao {

    async findForSituationAndUser(
        situationUuId: string | AirEntityUuId,
        user: User
    ): Promise<SituationRating> {
        let sr: QSituationRating
        let a: QActor
        let u: QUser
        let s: QSituation
        return await this._findUnique({
            select: {},
            from: [
                sr = Q.SituationRating,
                a = sr.actor.innerJoin(),
                u = a.user.innerJoin(),
                s = sr.situation.innerJoin()
            ],
            where: and(
                s.equals(situationUuId),
                u.uuId.equals(user.uuId)
            )
        })
    }

}
