import { IOC } from "@airport/direction-indicator";
import { ITheme } from "../generated/interfaces";
import { THEME_API } from "../tokens";

export class ThemeApiClient {

    async getAllWithTopics(): Promise<ITheme[]> {
        const themeApi = await IOC.get(THEME_API)

        return await themeApi.getAllWithTopics()
    }

}
