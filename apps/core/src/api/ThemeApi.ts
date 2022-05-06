import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { ITheme } from "../generated/interfaces";
import { ThemeDao } from "../dao/ThemeDao";

export interface IThemeApi {

    getAllWithTopics(): Promise<ITheme[]>

}

@Injected()
export class ThemeApi
    implements IThemeApi {

    @Inject()
    themeDao: ThemeDao

    @Api()
    async getAllWithTopics(): Promise<ITheme[]> {
        return await this.themeDao.getAllWithTopics()
    }

}
