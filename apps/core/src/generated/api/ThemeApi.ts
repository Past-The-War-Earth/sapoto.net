import {
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	Api,
} from '@airport/check-in';
import {
	ThemeDao,
} from '../../dao/ThemeDao';
import {
	Theme,
} from '../../ddl/Theme';


// An API stub for other Applications and UIs to use
@Injected()
export class ThemeApi {

    @Inject()
    themeApi: ThemeApi
    
    async  getAllWithTopics(): Promise<Theme[]> {
        return await this.themeApi.getAllWithTopics()
    }

}
