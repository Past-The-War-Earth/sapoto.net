import { IApiRegistry } from '@airport/check-in';
import { IApplicationLoader, IApplicationStore, JsonApplicationWithLastIds, LastIds } from '@airport/apron';
import { IApplicationInitializer } from '@airport/terminal-map';
export declare class ApplicationLoader implements IApplicationLoader {
    applicationInitializer: IApplicationInitializer;
    applicationStore: IApplicationStore;
    apiRegistry: IApiRegistry;
    private initializing;
    load(lastIds: LastIds): Promise<void>;
    initialize(): Promise<void>;
    getApplication(): JsonApplicationWithLastIds;
}
//# sourceMappingURL=ApplicationLoader.d.ts.map