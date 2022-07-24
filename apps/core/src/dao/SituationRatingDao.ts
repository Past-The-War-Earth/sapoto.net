import { Injected } from "@airport/direction-indicator";
import {
    BaseSituationRatingDao,
    QSituation,
    QSituationRating,
    Q
} from "../generated/generated";
import { QActor } from "@airport/holding-pattern";
import { SituationRating } from "../ddl/SituationRating";
import { AirEntityId } from "@airport/aviation-communication";
import { AND } from "@airport/tarmaq-query";
import { QUserAccount, UserAccount } from "@airport/travel-document-checkpoint";

@Injected()
export class SituationRatingDao
    extends BaseSituationRatingDao {

    async findForSituationAndUser(
        situationUuId: string | AirEntityId,
        user: UserAccount
    ): Promise<SituationRating> {
        let sr: QSituationRating,
            a: QActor,
            u: QUserAccount,
            s: QSituation
        return await this._findUnique({
            SELECT: {},
            FROM: [
                sr = Q.SituationRating,
                a = sr.actor.innerJoin(),
                u = a.userAccount.innerJoin(),
                s = sr.situation.innerJoin()
            ],
            WHERE: AND(
                s.equals(situationUuId),
                u.equals(user)
            )
        })
    }

}
