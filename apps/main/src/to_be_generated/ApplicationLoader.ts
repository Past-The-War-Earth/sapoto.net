import {
    IApiRegistry,
} from '@airport/check-in'
import {
    IApplicationLoader,
    IApplicationStore,
    JsonApplicationWithLastIds,
    LastIds
} from '@airport/apron'
import { APPLICATION } from '../generated/application'
import { Inject, Injected } from '@airport/direction-indicator'
import { IApplicationInitializer } from '@airport/terminal-map'

@Injected()
export class ApplicationLoader
    implements IApplicationLoader {

    @Inject()
    applicationInitializer: IApplicationInitializer

    @Inject()
    applicationStore: IApplicationStore

    @Inject()
    apiRegistry: IApiRegistry

    private initializing = false

    async load(
        lastIds: LastIds
    ): Promise<void> {
        if (this.initializing) {
            return
        }
        this.initializing = true

        this.applicationStore.state.lastIds = lastIds

        await this.applicationInitializer.initializeForAIRportApp(APPLICATION as any)

        this.apiRegistry.initialize(APPLICATION.versions[0].api)
    }

    async initialize(): Promise<void> {
    }

    getApplication(): JsonApplicationWithLastIds {
        return APPLICATION as any
    }
}
