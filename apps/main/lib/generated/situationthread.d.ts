import { IAirEntity } from '@airport/holding-pattern';
import { ISituation } from '@sapoto/core';
import { IReply } from './reply';
export interface ISituationThread extends IAirEntity {
    numberOfExperiences?: number;
    numberOfIdeas?: number;
    numberOfQuestions?: number;
    numberOfReplies?: number;
    situation?: ISituation;
    replies?: IReply[];
}
//# sourceMappingURL=situationthread.d.ts.map