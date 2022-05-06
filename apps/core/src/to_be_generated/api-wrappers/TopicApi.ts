import { Inject, Injected } from "@airport/direction-indicator"
import { IInterAppAPIClient } from "@airport/ground-control"

@Injected()
export class TopicApi {

    @Inject()
    interAppApiClient: IInterAppAPIClient

}