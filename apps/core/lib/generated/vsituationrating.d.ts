import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationVDescriptor } from './vsituation';
import { Situation } from '../ddl/Situation';
export interface SituationRatingVDescriptor<T> extends AirEntityVDescriptor<T> {
    importanceRating?: number | IVNumberField;
    urgencyRating?: number | IVNumberField;
    situation?: SituationVDescriptor<Situation>;
}
//# sourceMappingURL=vsituationrating.d.ts.map