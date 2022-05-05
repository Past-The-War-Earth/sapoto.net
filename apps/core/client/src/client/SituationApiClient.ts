import { IOC } from "@airport/direction-indicator";
import { SITUATION_API } from "../tokens";

export class SituationApiClient {

    async todo(
    ): Promise<void> {
        const situationApi = await IOC.get(SITUATION_API)

        // return await situationApi.todo()
    }

}
