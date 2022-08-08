import { IVStringField } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor } from './vtopic';
import { Topic } from '../ddl/Topic';
export interface ThemeVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    imageName?: string | IVStringField;
    topics?: TopicVDescriptor<Topic>;
}
//# sourceMappingURL=vtheme.d.ts.map