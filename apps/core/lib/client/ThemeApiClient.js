import { IOC } from "@airport/di";
import { THEME_API } from "../tokens";
export class ThemeApiClient {
    async getAllWithTopics() {
        const themeApi = await IOC.get(THEME_API);
        return await themeApi.getAllWithTopics();
    }
}
//# sourceMappingURL=ThemeApiClient.js.map