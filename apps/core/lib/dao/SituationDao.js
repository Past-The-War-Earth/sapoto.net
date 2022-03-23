import { DI } from "@airport/di";
import { BaseSituationDao } from "../generated/baseDaos";
import { SITUATION_DAO } from "../server-tokens";
export class SituationDao extends BaseSituationDao {
}
DI.set(SITUATION_DAO, SituationDao);
//# sourceMappingURL=SituationDao.js.map