import { ITheme } from "../../generated/interfaces";
export interface IThemeApi {
    getAllWithTopics(): Promise<ITheme[]>;
}
export declare class ThemeApiClient implements IThemeApi {
    getAllWithTopics(): Promise<ITheme[]>;
}
//# sourceMappingURL=ThemeApiClient.d.ts.map