// import { IOC } from '@airport/direction-indicator'
// import { TRANSACTIONAL_CONNECTOR } from '@airport/ground-control'
import { loadIframe } from '@airport/web-tower';
export * from '../dao/dao';
export * from '../ddl/ddl';
export * from '../generated/generated';
export * from './ApplicationLoader';
export * from './DemoDataLoader';
export * from './runtime-tokens';
loadIframe();
export async function initAIRportApp() {
    // await IOC.get(TRANSACTIONAL_CONNECTOR)
}
// initAIRportApp().then();
//# sourceMappingURL=runtime-index.js.map