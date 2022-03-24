import { IAgreement } from "../generated/interfaces";
export declare class AgreementApiClient {
    saveAgreement(agreement: IAgreement): Promise<void>;
    getMyAgreementForIdea(ideaRepositoryUuid: string): Promise<IAgreement>;
}
//# sourceMappingURL=AgreementApiClient.d.ts.map