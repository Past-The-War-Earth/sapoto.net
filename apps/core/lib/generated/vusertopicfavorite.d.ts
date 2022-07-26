import { IVBooleanField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor } from './vtopic';
export interface UserTopicFavoriteVDescriptor extends AirEntityVDescriptor {
    favorite?: boolean | IVBooleanField;
    topic?: TopicVDescriptor;
}
//# sourceMappingURL=vusertopicfavorite.d.ts.map