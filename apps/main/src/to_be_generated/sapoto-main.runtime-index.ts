import { loadIframe } from '@airport/web-tower'
import { sapoto_main } from './sapoto-main.runtime-injection'

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

loadIframe(sapoto_main.getFullName())
