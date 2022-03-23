var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Api } from "@airport/check-in";
import { container, DI } from "@airport/di";
import { THEME_DAO } from "../app";
import { THEME_API } from "../tokens";
export class ThemeApi {
    async getAllWithTopics() {
        const themeDao = await container(this).get(THEME_DAO);
        return await themeDao.getAllWithTopics();
    }
}
__decorate([
    Api()
], ThemeApi.prototype, "getAllWithTopics", null);
DI.set(THEME_API, ThemeApi);
//# sourceMappingURL=ThemeApi.js.map