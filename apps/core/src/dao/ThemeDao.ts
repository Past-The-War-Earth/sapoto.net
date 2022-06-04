import { Y } from "@airport/air-traffic-control";
import { Injected } from "@airport/direction-indicator";
import { Theme } from "../ddl/Theme";
import {
    BaseThemeDao,
    Q,
    QTheme,
    QTopic
} from "../generated/generated";

@Injected()
export class ThemeDao
    extends BaseThemeDao {

    async getAllWithTopics(): Promise<Theme[]> {
        let th: QTheme
        let to: QTopic
        return await this._find({
            select: {
                '*': Y,
                topics: {}
            },
            from: [
                th = Q.Theme,
                to = th.topics.leftJoin()
            ]
        })
    }

}
