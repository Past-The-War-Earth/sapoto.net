import { IOC } from '@airport/di';
import { TRANSACTIONAL_CONNECTOR } from '@airport/ground-control';
import { loadIframe } from '@airport/web-tower'
import { wireApplicationLoader } from '@sapoto/main'

loadIframe()
wireApplicationLoader()

export async function initAIRportApp() {
    await IOC.get(TRANSACTIONAL_CONNECTOR)
}

initAIRportApp().then();
