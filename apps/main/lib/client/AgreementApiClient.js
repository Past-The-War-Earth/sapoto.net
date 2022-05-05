import { IOC } from "@airport/direction-indicator";
import { AGREEMENT_API } from "../tokens";
export class AgreementApiClient {
    async saveAgreement(agreement) {
        const agreementApi = await IOC.get(AGREEMENT_API);
        return await agreementApi.saveAgreement(agreement);
    }
    async getMyAgreementForIdea(ideaRepositoryUuid) {
        const agreementApi = await IOC.get(AGREEMENT_API);
        return await agreementApi.getMyAgreementForIdea(ideaRepositoryUuid);
    }
}
//# sourceMappingURL=AgreementApiClient.js.map