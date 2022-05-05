import { IOC } from "@airport/direction-indicator";
import { SITUATION_API } from "../tokens";
export class SituationApiClient {
    async todo() {
        const situationApi = await IOC.get(SITUATION_API);
        // return await situationApi.todo()
    }
}
//# sourceMappingURL=SituationApiClient.js.map