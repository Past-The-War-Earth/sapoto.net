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
    async findWithListingDetailsForATopic(topic) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi.findWithListingDetailsForATopic(topic);
    }
    async findWithListingDetailsForATheme(theme) {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi.findWithListingDetailsForATheme(theme);
    }
    async getNewSituation() {
        const situationApi = await IOC.get(SITUATION_API);
        return await situationApi.getNewSituation();
    }
}
//# sourceMappingURL=SituationApiClient.js.map