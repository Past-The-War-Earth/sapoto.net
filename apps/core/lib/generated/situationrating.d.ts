import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituation } from './situation';
export interface ISituationRating extends IRepositoryEntity {
    importanceRating?: number;
    urgencyRating?: number;
    situation?: ISituation;
}
//# sourceMappingURL=situationrating.d.ts.map