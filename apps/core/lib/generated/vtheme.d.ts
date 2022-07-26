import { IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { TopicVDescriptor } from './vtopic';
export interface ThemeVDescriptor extends AirEntityVDescriptor {
    name?: string | IVStringField;
    imageName?: string | IVStringField;
    topics?: TopicVDescriptor;
}
//# sourceMappingURL=vtheme.d.ts.map