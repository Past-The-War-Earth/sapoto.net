import { IAirEntity } from '@airport/holding-pattern';
import { ISituation } from '@sapoto/core';
import { IReply } from './reply';
export interface ISituationThread extends IAirEntity {
    numExperiences?: number;
    numIdeas?: number;
    numQuestions?: number;
    numReasons?: number;
    numReplies?: number;
    situation?: ISituation;
    replies?: IReply[];
}
//# sourceMappingURL=situationthread.d.ts.map