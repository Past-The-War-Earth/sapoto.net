import { Api } from "@airport/check-in";
import { Inject, Injected } from "@airport/direction-indicator";
import { ThemeDao } from "../dao/ThemeDao";
import { Theme } from "../ddl/Theme";

@Injected()
export class ThemeApi {

    @Inject()
    themeDao: ThemeDao

    @Api()
    async getAllWithTopics(): Promise<Theme[]> {
        return await this.themeDao.getAllWithTopics()
    }

}
