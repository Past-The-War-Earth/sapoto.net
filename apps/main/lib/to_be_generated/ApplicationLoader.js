var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { APPLICATION } from '../generated/application';
import { Inject, Injected } from '@airport/direction-indicator';
let ApplicationLoader = class ApplicationLoader {
    constructor() {
        this.initializing = false;
    }
    async load(lastIds) {
        if (this.initializing) {
            return;
        }
        this.initializing = true;
        const lastTerminalState = this.terminalStore.getTerminalState();
        this.terminalStore.state.next(Object.assign(Object.assign({}, lastTerminalState), { lastIds }));
        await this.applicationInitializer.initializeForAIRportApp(APPLICATION);
        this.apiRegistry.initialize(APPLICATION.versions[0].api);
    }
    async initialize() {
    }
    getApplication() {
        return APPLICATION;
    }
};
__decorate([
    Inject()
], ApplicationLoader.prototype, "applicationInitializer", void 0);
__decorate([
    Inject()
], ApplicationLoader.prototype, "terminalStore", void 0);
__decorate([
    Inject()
], ApplicationLoader.prototype, "apiRegistry", void 0);
ApplicationLoader = __decorate([
    Injected()
], ApplicationLoader);
export { ApplicationLoader };
//# sourceMappingURL=ApplicationLoader.js.map