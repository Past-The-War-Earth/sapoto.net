import { IAirEntity } from '@airport/holding-pattern';
import { ITheme } from './theme';
import { ISituation } from './situation';
export interface ITopic extends IAirEntity {
    name?: string;
    imagePath?: string;
    theme?: ITheme;
    situations?: ISituation[];
}
//# sourceMappingURL=topic.d.ts.map