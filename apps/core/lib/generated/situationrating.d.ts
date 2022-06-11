import { IAirEntity } from '@airport/holding-pattern';
import { ISituation } from './situation';
export interface ISituationRating extends IAirEntity {
    importanceRating?: number;
    urgencyRating?: number;
    situation?: ISituation;
}
//# sourceMappingURL=situationrating.d.ts.map