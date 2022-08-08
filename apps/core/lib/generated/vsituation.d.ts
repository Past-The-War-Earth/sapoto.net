import { IVNumberField, IVStringField } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor } from './vtopic';
import { Topic } from '../ddl/Topic';
import { SituationRatingVDescriptor } from './vsituationrating';
import { SituationRating } from '../ddl/SituationRating';
export interface SituationVDescriptor<T> extends AirEntityVDescriptor<T> {
    text?: string | IVStringField;
    urgencyTotal?: number | IVNumberField;
    numberOfUrgencyRatings?: number | IVNumberField;
    importanceTotal?: number | IVNumberField;
    numberOfImportanceRatings?: number | IVNumberField;
    topic?: TopicVDescriptor<Topic>;
    ratings?: SituationRatingVDescriptor<SituationRating>;
}
//# sourceMappingURL=vsituation.d.ts.map