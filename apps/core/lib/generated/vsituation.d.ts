import { IVNumberField, IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor } from './vtopic';
import { SituationRatingVDescriptor } from './vsituationrating';
export interface SituationVDescriptor extends AirEntityVDescriptor {
    text?: string | IVStringField;
    urgencyTotal?: number | IVNumberField;
    numberOfUrgencyRatings?: number | IVNumberField;
    importanceTotal?: number | IVNumberField;
    numberOfImportanceRatings?: number | IVNumberField;
    topic?: TopicVDescriptor;
    ratings?: SituationRatingVDescriptor;
}
//# sourceMappingURL=vsituation.d.ts.map