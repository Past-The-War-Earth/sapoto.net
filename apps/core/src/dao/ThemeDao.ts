import { ALL_FIELDS } from "@airport/air-traffic-control";
import { DI } from "@airport/direction-indicator";
import {
    BaseThemeDao,
    IBaseThemeDao,
    ITheme,
    Q,
    QTheme,
    QTopic
} from "../generated/generated";
import { THEME_DAO } from "../server-tokens";

export interface IThemeDao
    extends IBaseThemeDao {

    getAllWithTopics(): Promise<ITheme[]>

}

export class ThemeDao
    extends BaseThemeDao
    implements IThemeDao {

    async getAllWithTopics(): Promise<ITheme[]> {
        let th: QTheme
        let to: QTopic
        return await this.db.find.tree({
            select: {
                ...ALL_FIELDS,
                topics: {
                    ...ALL_FIELDS
                }
            },
            from: [
                th = Q.Theme,
                to = th.topics.leftJoin()
            ]
        })
    }

}
DI.set(THEME_DAO, ThemeDao)
