import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationVDescriptor } from './vsituation';
export interface SituationRatingVDescriptor extends AirEntityVDescriptor {
    importanceRating?: number | IVNumberField;
    urgencyRating?: number | IVNumberField;
    situation?: SituationVDescriptor;
}
//# sourceMappingURL=vsituationrating.d.ts.map