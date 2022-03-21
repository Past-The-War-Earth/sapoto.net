import { DI } from "@airport/di";
import { IBaseSituationDao, BaseSituationDao } from "../generated/baseDaos";
import { SITUATION_DAO } from "../server-tokens";

export interface ISituationDao
    extends IBaseSituationDao {

}

export class SituationDao
    extends BaseSituationDao
    implements ISituationDao {

}
DI.set(SITUATION_DAO, SituationDao)
