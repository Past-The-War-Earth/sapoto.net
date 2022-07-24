import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
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
            SELECT: {
                '*': Y,
                topics: {}
            },
            FROM: [
                th = Q.Theme,
                to = th.topics.LEFT_JOIN()
            ]
        })
    }

}
