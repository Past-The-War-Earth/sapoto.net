import {
	Api,
} from '@airport/air-traffic-control';
import {
	Inject,
	Injected,
} from '@airport/direction-indicator';
import {
	ThemeDao,
} from '../../dao/ThemeDao';
import {
	Theme,
} from '../../ddl/Theme';
import {
	ApiProxy,
} from '@airport/airgate';
import {
	application,
} from '../../to_be_generated/app-declaration';



// An API stub for other Applications and UIs to use
// @Injected() is implied but not specified to avoid @airport/direction-indicator
// dependency in UI API stub (eventually, once it's @airport/autopilot is cleaned
// up)
// @Injected()
export class ThemeApi extends ApiProxy<ThemeApi> {

    constructor() {
        super(application, [])
    }
        
            
    async  getAllWithTopics(): Promise<Theme[]> {
        return await this.proxy.getAllWithTopics()
    }

}
