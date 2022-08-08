import { IVNumberField } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationVDescriptor, Situation } from '@sapoto/core/lib/to_be_generated/runtime-index';
import { ReplyVDescriptor } from './vreply';
import { Reply } from '../ddl/Reply';
export interface SituationThreadVDescriptor<T> extends AirEntityVDescriptor<T> {
    numberOfExperiences?: number | IVNumberField;
    numberOfIdeas?: number | IVNumberField;
    numberOfQuestions?: number | IVNumberField;
    numberOfReplies?: number | IVNumberField;
    situation?: SituationVDescriptor<Situation>;
    replies?: ReplyVDescriptor<Reply>;
}
//# sourceMappingURL=vsituationthread.d.ts.map