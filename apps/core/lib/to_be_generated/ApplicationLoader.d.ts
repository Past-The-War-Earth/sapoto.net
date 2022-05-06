import { IApiRegistry } from '@airport/check-in';
import { IApplicationLoader, IApplicationStore, JsonApplicationWithLastIds, LastIds } from '@airport/apron';
import { IApplicationInitializer } from '@airport/terminal-map';
import { IDemoDataLoader } from './DemoDataLoader';
export declare class ApplicationLoader implements IApplicationLoader {
    applicationInitializer: IApplicationInitializer;
    applicationStore: IApplicationStore;
    apiRegistry: IApiRegistry;
    demoDataLoader: IDemoDataLoader;
    private initializing;
    load(lastIds: LastIds): Promise<void>;
    initialize(): Promise<void>;
    getApplication(): JsonApplicationWithLastIds;
}
export declare function wireApplicationLoader(): void;
//# sourceMappingURL=ApplicationLoader.d.ts.map