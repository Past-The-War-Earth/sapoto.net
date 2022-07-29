import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { ReplyVDescriptor } from './vreply';
import { Reply } from '../ddl/Reply';
export interface ReplyRatingVDescriptor<T> extends AirEntityVDescriptor<T> {
    upOrDownRating?: number | IVNumberField;
    reply?: ReplyVDescriptor<Reply>;
}
//# sourceMappingURL=vreplyrating.d.ts.map