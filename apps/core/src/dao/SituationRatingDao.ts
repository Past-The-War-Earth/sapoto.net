import { Injected } from "@airport/direction-indicator";
import {
    User,
    QUser
} from "@airport/travel-document-checkpoint";
import {
    BaseSituationRatingDao,
    QSituationRating,
    Q
} from "../generated/generated";
import { and } from "@airport/air-traffic-control";
import { QActor } from "@airport/holding-pattern";
import { SituationRating } from "../ddl/SituationRating";
import { RepositoryEntityId } from "@airport/aviation-communication";

@Injected()
export class SituationRatingDao
    extends BaseSituationRatingDao {

    async findForSituationAndUser(
        situationId: string | RepositoryEntityId,
        user: User
    ): Promise<SituationRating> {
        let sr: QSituationRating
        let a: QActor
        let u: QUser
        return await this._findOne({
            select: {},
            from: [
                sr = Q.SituationRating,
                a = sr.actor.innerJoin(),
                u = a.user.innerJoin()
            ],
            where: and(
                sr.situation.equals(situationId),
                u.uuId.equals(user.uuId)
            )
        })
    }

}
