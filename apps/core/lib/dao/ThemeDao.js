var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { BaseThemeDao, Q } from "../generated/generated";
let ThemeDao = class ThemeDao extends BaseThemeDao {
    async getAllWithTopics() {
        let th;
        let to;
        return await this._find({
            SELECT: {
                '*': Y,
                topics: {}
            },
            FROM: [
                th = Q.Theme,
                to = th.topics.leftJoin()
            ]
        });
    }
};
ThemeDao = __decorate([
    Injected()
], ThemeDao);
export { ThemeDao };
//# sourceMappingURL=ThemeDao.js.map