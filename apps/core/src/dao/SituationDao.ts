import { ALL_FIELDS, and } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { IBaseSituationDao, BaseSituationDao } from "../generated/baseDaos";
import { ISituation, ITheme, ITopic } from "../generated/interfaces";
import { Q } from "../generated/qApplication";
import { QSituation } from "../generated/qsituation";
import { QSituationRating } from "../generated/qsituationrating";
import { QTheme } from "../generated/qtheme";
import { QTopic } from "../generated/qtopic";

export interface ISituationDao
    extends IBaseSituationDao {

    findWithListingDetailsForATopic(
        topic: ITopic
    ): Promise<ISituation[]>

    findWithListingDetailsForATheme(
        theme: ITheme
    ): Promise<ISituation[]>

}

@Injected()
export class SituationDao
    extends BaseSituationDao
    implements ISituationDao {

    async findWithListingDetailsForATopic(
        topic: ITopic
    ): Promise<ISituation[]> {
        let s: QSituation
        let sR: QSituationRating
        let t: QTopic
        return await this.db.find.graph({
            select: {
                ...ALL_FIELDS,
                ratings: {},
                topic: {
                    ...ALL_FIELDS,
                    theme: {}
                }
            },
            from: [
                s = Q.Situation,
                sR = s.ratings.leftJoin(),
                t = s.topic.leftJoin()
            ],
            where: and(
                t.repository.id.equals(topic.repository.id),
                t.actor.id.equals(topic.actor.id),
                t.actorRecordId.equals(topic.actorRecordId)
            )
        })
    }

    async findWithListingDetailsForATheme(
        theme: ITheme
    ): Promise<ISituation[]> {
        let s: QSituation
        let sR: QSituationRating
        let to: QTopic
        let th: QTheme
        return await this.db.find.graph({
            select: {
                ...ALL_FIELDS,
                ratings: {},
                topic: {
                    ...ALL_FIELDS,
                    theme: {}
                }
            },
            from: [
                s = Q.Situation,
                sR = s.ratings.leftJoin(),
                to = s.topic.leftJoin(),
                th = to.theme.leftJoin()
            ],
            where: and(
                th.repository.id.equals(theme.repository.id),
                th.actor.id.equals(theme.actor.id),
                th.actorRecordId.equals(theme.actorRecordId)
            )
        })
    }
}
