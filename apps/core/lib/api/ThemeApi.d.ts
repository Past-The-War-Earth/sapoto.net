import { ITheme } from "../generated/interfaces";
import { ThemeDao } from "../dao/ThemeDao";
export interface IThemeApi {
    getAllWithTopics(): Promise<ITheme[]>;
}
export declare class ThemeApi implements IThemeApi {
    themeDao: ThemeDao;
    getAllWithTopics(): Promise<ITheme[]>;
}
//# sourceMappingURL=ThemeApi.d.ts.map