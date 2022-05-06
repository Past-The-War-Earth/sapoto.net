import { IOC } from '@airport/direction-indicator';
import { TRANSACTIONAL_CONNECTOR } from '@airport/ground-control';
import { loadIframe } from '@airport/web-tower'
import { APPLICATION_LOADER } from '@sapoto/main-runtime'

loadIframe()
// wireApplicationLoader()

export async function initAIRportApp() {
    // await IOC.get(TRANSACTIONAL_CONNECTOR)
    await IOC.get(APPLICATION_LOADER)
}

initAIRportApp().then();
