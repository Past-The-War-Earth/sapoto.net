import { IRepositoryEntity } from '@airport/holding-pattern';
import { ISituation } from '@sapoto/core';
import { IReply } from './reply';
export interface ISituationThread extends IRepositoryEntity {
    situation?: ISituation;
    replies?: IReply[];
}
//# sourceMappingURL=situationthread.d.ts.map