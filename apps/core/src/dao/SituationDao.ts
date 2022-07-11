import { Injected } from "@airport/direction-indicator";
import { plus } from "@airport/tarmaq-query";
import { Situation } from "../ddl/situation";
import { ITotalDelta } from "../ddl/TotalDelta";
import { BaseSituationDao } from "../generated/baseDaos";
import { Q } from "../generated/qApplication";

@Injected()
export class SituationDao
    extends BaseSituationDao {

    async updateShareTotal(
        situation: Situation,
        importanceDelta: ITotalDelta,
        urgencyDelta: ITotalDelta,
    ): Promise<void> {
        const s = Q.Situation
        await this.db.updateWhere({
            update: s,
            set: {
                importanceTotal: plus(s.importanceTotal, importanceDelta.totalDelta),
                numberOfImportanceRatings: plus(s.numberOfImportanceRatings,
                    importanceDelta.numberDelta),
                urgencyTotal: plus(s.urgencyTotal, urgencyDelta.totalDelta),
                numberOfUrgencyRatings: plus(s.numberOfUrgencyRatings,
                    urgencyDelta.numberDelta),
            },
            where: s.equals(situation)
        })
    }

}
