import { loadIframe } from '@airport/web-tower';
import { main } from './common-tokens';
export * from '../dao/dao';
export * from '../ddl/ddl';
export * from '../api/api';
export * from '../generated/generated';
export * from './ApplicationLoader';
export * from './runtime-tokens';
loadIframe(main.getFullName());
//# sourceMappingURL=runtime-index.js.map