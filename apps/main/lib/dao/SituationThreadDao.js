import { DI } from "@airport/direction-indicator";
import { BaseSituationThreadDao } from "../generated/generated";
import { SITUATION_THREAD_DAO } from "../server-tokens";
export class SituationThreadDao extends BaseSituationThreadDao {
    async add(situationThread) {
        await this.save(situationThread);
    }
}
DI.set(SITUATION_THREAD_DAO, SituationThreadDao);
//# sourceMappingURL=SituationThreadDao.js.map