import { domain as injectionDomain } from "@airport/di";
export const domain = injectionDomain('localhost:8100');
export function app(applicationName) {
    return domain.app("@sapoto/" + applicationName);
}
//# sourceMappingURL=index.js.map