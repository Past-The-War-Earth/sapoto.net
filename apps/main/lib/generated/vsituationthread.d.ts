import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { SituationVDescriptor } from '@sapoto/core/lib/to_be_generated/runtime-index';
import { ReplyVDescriptor } from './vreply';
export interface SituationThreadVDescriptor extends AirEntityVDescriptor {
    numberOfExperiences?: number | IVNumberField;
    numberOfIdeas?: number | IVNumberField;
    numberOfQuestions?: number | IVNumberField;
    numberOfReplies?: number | IVNumberField;
    situation?: SituationVDescriptor;
    replies?: ReplyVDescriptor;
}
//# sourceMappingURL=vsituationthread.d.ts.map