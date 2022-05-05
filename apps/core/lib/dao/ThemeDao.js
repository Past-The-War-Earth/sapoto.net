import { ALL_FIELDS } from "@airport/air-traffic-control";
import { DI } from "@airport/direction-indicator";
import { BaseThemeDao, Q } from "../generated/generated";
import { THEME_DAO } from "../server-tokens";
export class ThemeDao extends BaseThemeDao {
    async getAllWithTopics() {
        let th;
        let to;
        return await this.db.find.tree({
            select: Object.assign(Object.assign({}, ALL_FIELDS), { topics: Object.assign({}, ALL_FIELDS) }),
            from: [
                th = Q.Theme,
                to = th.topics.leftJoin()
            ]
        });
    }
}
DI.set(THEME_DAO, ThemeDao);
//# sourceMappingURL=ThemeDao.js.map