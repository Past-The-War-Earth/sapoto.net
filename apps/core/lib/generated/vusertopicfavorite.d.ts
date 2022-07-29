import { IVBooleanField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor } from './vtopic';
import { Topic } from '../ddl/Topic';
export interface UserTopicFavoriteVDescriptor<T> extends AirEntityVDescriptor<T> {
    favorite?: boolean | IVBooleanField;
    topic?: TopicVDescriptor<Topic>;
}
//# sourceMappingURL=vusertopicfavorite.d.ts.map