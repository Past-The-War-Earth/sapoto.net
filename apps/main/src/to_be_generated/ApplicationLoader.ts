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
import { IApplicationInitializer, ITerminalStore } from '@airport/terminal-map'

@Injected()
export class ApplicationLoader
    implements IApplicationLoader {

    @Inject()
    applicationInitializer: IApplicationInitializer

    @Inject()
    terminalStore: ITerminalStore

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

        const lastTerminalState = this.terminalStore.getTerminalState()
        this.terminalStore.state.next({
            ...lastTerminalState,
            lastIds
        })

        await this.applicationInitializer.initializeForAIRportApp(APPLICATION as any)

        this.apiRegistry.initialize(APPLICATION.versions[0].api)
    }

    async initialize(): Promise<void> {
    }

    getApplication(): JsonApplicationWithLastIds {
        return APPLICATION as any
    }
}
