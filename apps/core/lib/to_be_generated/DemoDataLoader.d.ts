import { ThemeDao } from "./sapoto-core.runtime-index";
export interface IDemoDataLoader {
    loadDemoData(): Promise<void>;
}
export declare class DemoDataLoader implements IDemoDataLoader {
    themeDao: ThemeDao;
    loadDemoData(): Promise<void>;
}
//# sourceMappingURL=DemoDataLoader.d.ts.map