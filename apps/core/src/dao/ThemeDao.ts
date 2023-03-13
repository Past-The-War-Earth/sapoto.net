import { Injected } from "@airport/direction-indicator";
import { Y } from "@airport/tarmaq-query";
import { Theme } from "../ddl/Theme";
import { BaseThemeDao } from "../generated/baseDaos";
import { QTheme, QTopic } from "../generated/qInterfaces";
import { Q_localhost_colon_8100____at_sapoto_slash_core as Q } from "../generated/qApplication";

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
