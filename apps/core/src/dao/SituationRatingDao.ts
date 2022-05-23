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
                sir.situation.equals(situationId),
                qUser.uuId.equals(user.uuId)
            )
        })
    }

}
