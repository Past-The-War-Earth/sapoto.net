import { Injected } from "@airport/direction-indicator";
import {
    BaseSituationRatingDao
} from "../generated/baseDaos"
import {
    QSituation,
    QSituationRating
} from "../generated/qInterfaces"
import {
    Q_localhost_colon_8100____at_sapoto_slash_core as Q
} from "../generated/qApplication";
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
                a = sr.actor.INNER_JOIN(),
                u = a.userAccount.INNER_JOIN(),
                s = sr.situation.INNER_JOIN()
            ],
            WHERE: AND(
                s.equals(situationUuId),
                u.equals(user)
            )
        })
    }

}
