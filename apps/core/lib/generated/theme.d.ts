import { IRepositoryEntity } from '@airport/holding-pattern';
import { ITopic } from './topic';
export interface ITheme extends IRepositoryEntity {
    name?: string;
    imageName?: string;
    topics?: ITopic[];
}
//# sourceMappingURL=theme.d.ts.map