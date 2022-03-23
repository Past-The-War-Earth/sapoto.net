import { IRepositoryEntity } from '@airport/holding-pattern';
import { ITopic } from './topic';
import { ISituationRating } from './situationrating';
export interface ISituation extends IRepositoryEntity {
    text?: string;
    topic?: ITopic;
    ratings?: ISituationRating[];
}
//# sourceMappingURL=situation.d.ts.map