import { ThemeDao } from "../dao/ThemeDao";
import { Theme } from "../ddl/Theme";
export declare class ThemeApi {
    themeDao: ThemeDao;
    getAllWithTopics(): Promise<Theme[]>;
}
//# sourceMappingURL=ThemeApi.d.ts.map