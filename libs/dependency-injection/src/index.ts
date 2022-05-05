import {
    domain as injectionDomain,
    IInjectionApplication
} from "@airport/direction-indicator";

export const domain = injectionDomain('localhost:8100')

export function app(
    applicationName: string
): IInjectionApplication {
    return domain.app("@sapoto/" + applicationName)
}
