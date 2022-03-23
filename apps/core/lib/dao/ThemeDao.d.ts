import { BaseThemeDao, IBaseThemeDao, ITheme } from "../generated/generated";
export interface IThemeDao extends IBaseThemeDao {
    getAllWithTopics(): Promise<ITheme[]>;
}
export declare class ThemeDao extends BaseThemeDao implements IThemeDao {
    getAllWithTopics(): Promise<ITheme[]>;
}
//# sourceMappingURL=ThemeDao.d.ts.map