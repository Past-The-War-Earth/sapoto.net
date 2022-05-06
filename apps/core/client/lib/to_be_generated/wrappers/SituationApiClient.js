import { IOC } from "@airport/direction-indicator";
import { SITUATION_API } from "../tokens";
export class SituationApiClient {
    async save(situation) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi.save(situation);
    }
    async rateSituation(situation, importanceRating, urgencyRating, user) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi.rateSituation(situation, importanceRating, urgencyRating, user);
    }
}
//# sourceMappingURL=SituationApiClient.js.map