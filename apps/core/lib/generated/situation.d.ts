import { IAirEntity } from '@airport/holding-pattern';
import { SituationRating } from '../ddl/SituationRating';
import { ITopic } from './topic';
import { ISituationRating } from './situationrating';
export interface ISituation extends IAirEntity {
    text?: string;
    urgencyTotal?: number;
    numberOfUrgencyRatings?: number;
    importanceTotal?: number;
    numberOfImportanceRatings?: number;
    topic?: ITopic;
    ratings?: ISituationRating[];
    userRating?: SituationRating;
}
//# sourceMappingURL=situation.d.ts.map