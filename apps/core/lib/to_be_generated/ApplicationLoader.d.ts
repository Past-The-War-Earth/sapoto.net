import { IApiRegistry } from '@airport/check-in';
import { IApplicationLoader, JsonApplicationWithLastIds, LastIds } from '@airport/apron';
import { IApplicationInitializer, ITerminalStore } from '@airport/terminal-map';
import { IDemoDataLoader } from './DemoDataLoader';
export declare class ApplicationLoader implements IApplicationLoader {
    applicationInitializer: IApplicationInitializer;
    terminalStore: ITerminalStore;
    apiRegistry: IApiRegistry;
    demoDataLoader: IDemoDataLoader;
    private initializing;
    load(lastIds: LastIds): Promise<void>;
    initialize(): Promise<void>;
    getApplication(): JsonApplicationWithLastIds;
}
//# sourceMappingURL=ApplicationLoader.d.ts.map