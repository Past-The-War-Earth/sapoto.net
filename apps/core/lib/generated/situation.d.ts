import { IAirEntity } from '@airport/holding-pattern';
import { ITopic } from './topic';
import { ISituationRating } from './situationrating';
export interface ISituation extends IAirEntity {
    text?: string;
    topic?: ITopic;
    ratings?: ISituationRating[];
    eisenhowerMatrix?: {
        importance: number;
        urgency: number;
        votes: number;
        user: {
            importance: number;
            urgency: number;
        };
    };
}
//# sourceMappingURL=situation.d.ts.map