import { IBaseSituationDao, BaseSituationDao } from "../generated/baseDaos";
import { ISituation, ITheme, ITopic } from "../generated/interfaces";
export interface ISituationDao extends IBaseSituationDao {
    findWithListingDetailsForATopic(topic: ITopic): Promise<ISituation[]>;
    findWithListingDetailsForATheme(theme: ITheme): Promise<ISituation[]>;
}
export declare class SituationDao extends BaseSituationDao implements ISituationDao {
    findWithListingDetailsForATopic(topic: ITopic): Promise<ISituation[]>;
    findWithListingDetailsForATheme(theme: ITheme): Promise<ISituation[]>;
}
//# sourceMappingURL=SituationDao.d.ts.map