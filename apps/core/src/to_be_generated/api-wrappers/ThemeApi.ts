import { Inject, Injected } from "@airport/direction-indicator"
import { IInterAppAPIClient } from "@airport/ground-control"
import { ITheme } from "../../generated/interfaces"
import { THEME_API } from "../common-tokens"


@Injected()
export class ThemeApi {

    @Inject()
    interAppApiClient: IInterAppAPIClient

    async getAllWithTopics(): Promise<ITheme[]> {
        return await this.interAppApiClient.invokeApiMethod(
            THEME_API, 'getAllWithTopics', [])
    }

}