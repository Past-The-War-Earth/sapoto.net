import { IVNumberField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { ReplyVDescriptor } from './vreply';
export interface ReplyRatingVDescriptor extends AirEntityVDescriptor {
    upOrDownRating?: number | IVNumberField;
    reply?: ReplyVDescriptor;
}
//# sourceMappingURL=vreplyrating.d.ts.map