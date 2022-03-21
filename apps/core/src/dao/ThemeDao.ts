import { ALL_FIELDS } from "@airport/air-control";
import { DI } from "@airport/di";
import {
    BaseThemeDao,
    IBaseThemeDao,
    ITheme
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
        return await this.db.find.tree({
            select: {
                ...ALL_FIELDS,
                topics: {
                    ...ALL_FIELDS
                }
            }
        })
    }

}
DI.set(THEME_DAO, ThemeDao)
