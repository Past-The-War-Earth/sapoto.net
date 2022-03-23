import { IRepositoryEntity } from '@airport/holding-pattern';
import { ITopic } from './topic';
import { ISituationRating } from './situationrating';
export interface ISituation extends IRepositoryEntity {
    text?: string;
    topic?: ITopic;
    ratings?: ISituationRating[];
    counts?: {
        experiences: number;
        ideas: number;
        questions: number;
        reasons: number;
        replies: number;
    };
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