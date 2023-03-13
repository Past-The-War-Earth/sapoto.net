import { Api } from "@airport/air-traffic-control";
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
