import { IOC } from "@airport/direction-indicator";
import { ITheme } from "../../generated/interfaces";
import { THEME_API } from "../tokens";

export interface IThemeApi {

    getAllWithTopics(): Promise<ITheme[]>

}

export class ThemeApiClient
    implements IThemeApi {

    async getAllWithTopics(): Promise<ITheme[]> {
        const themeApi = await IOC.get(THEME_API)

        return await themeApi.getAllWithTopics()
    }

}
