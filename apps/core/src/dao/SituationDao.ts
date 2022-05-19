import { Injected } from "@airport/direction-indicator";
import { IBaseSituationDao, BaseSituationDao } from "../generated/baseDaos";

export interface ISituationDao
    extends IBaseSituationDao {

}

@Injected()
export class SituationDao
    extends BaseSituationDao
    implements ISituationDao {

}
