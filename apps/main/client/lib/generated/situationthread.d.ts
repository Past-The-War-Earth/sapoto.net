import { IRepositoryEntity } from '@airport/holding-pattern';
import { ICounts } from '../ddl/icounts';
import { ISituation } from '@sapoto/core';
import { IReply } from './reply';
export interface ISituationThread extends IRepositoryEntity {
    counts?: ICounts;
    situation?: ISituation;
    replies?: IReply[];
}
//# sourceMappingURL=situationthread.d.ts.map