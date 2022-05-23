import {
	THEME_API,
} from '../../to_be_generated/common-tokens';
import {
	DEPENDENCY_INJECTION,
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

    constructor() {
        DEPENDENCY_INJECTION.db().manualInject(this, THEME_API)
    }
        
    @Inject()
    themeApi: ThemeApi
            
    async  getAllWithTopics(): Promise<Theme[]> {
        return await this.themeApi.getAllWithTopics()
    }

}
