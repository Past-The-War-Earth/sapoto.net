import { container, DI } from "@airport/di";
import { ITheme, THEME_DAO } from "../app";
import { THEME_API } from "../tokens";

export interface IThemeApi {

    getAllWithTopics(): Promise<ITheme[]>

}

export class ThemeApi
    implements IThemeApi {

    async getAllWithTopics(): Promise<ITheme[]> {
        const themeDao = await container(this).get(THEME_DAO)

        return await themeDao.getAllWithTopics()
    }

}
DI.set(THEME_API, ThemeApi)
