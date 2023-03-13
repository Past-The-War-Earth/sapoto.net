import { Injected } from "@airport/direction-indicator";
import { PLUS } from "@airport/tarmaq-query";
import { Situation } from "../ddl/situation";
import { ITotalDelta } from "../ddl/TotalDelta";
import { BaseSituationDao } from "../generated/baseDaos";
import { Q_localhost_colon_8100____at_sapoto_slash_core as Q } from "../generated/qApplication";

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
            UPDATE: s,
            SET: {
                importanceTotal: PLUS(s.importanceTotal, importanceDelta.totalDelta),
                numberOfImportanceRatings: PLUS(s.numberOfImportanceRatings,
                    importanceDelta.numberDelta),
                urgencyTotal: PLUS(s.urgencyTotal, urgencyDelta.totalDelta),
                numberOfUrgencyRatings: PLUS(s.numberOfUrgencyRatings,
                    urgencyDelta.numberDelta),
            },
            WHERE: s.equals(situation)
        })
    }

}
