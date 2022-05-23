import { ThemeDao } from "./runtime-index";
export interface IDemoDataLoader {
    loadDemoData(): Promise<void>;
}
export declare class DemoDataLoader implements IDemoDataLoader {
    themeDao: ThemeDao;
    loadDemoData(): Promise<void>;
}
//# sourceMappingURL=DemoDataLoader.d.ts.map