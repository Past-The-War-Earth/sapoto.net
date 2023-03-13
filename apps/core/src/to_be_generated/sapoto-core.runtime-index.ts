// import { IOC } from '@airport/direction-indicator'
// import { TRANSACTIONAL_CONNECTOR } from '@airport/ground-control'
import { loadIframe } from '@airport/web-tower'
import { sapoto_core } from './sapoto-core.runtime-injection'

export * from '../api/api'
export * from '../dao/dao'
export * from '../ddl/ddl'
export * from '../dvo/dvo'
export * from '../generated/baseDaos'
export * from '../generated/baseDvos'
export * from '../generated/qApplication'
export * from '../generated/qInterfaces'
export * from '../generated/vInterfaces'
export * from './ApplicationLoader'
export * from './sapoto-core.runtime-injection'

loadIframe(sapoto_core.getFullName())

export async function initAIRportApp() {
    // await IOC.get(TRANSACTIONAL_CONNECTOR)
}

// initAIRportApp().then();