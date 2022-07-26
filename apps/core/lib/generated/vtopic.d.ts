import { IVStringField } from '@airport/airbridge-validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { ThemeVDescriptor } from './vtheme';
import { SituationVDescriptor } from './vsituation';
export interface TopicVDescriptor extends AirEntityVDescriptor {
    name?: string | IVStringField;
    imagePath?: string | IVStringField;
    theme?: ThemeVDescriptor;
    situations?: SituationVDescriptor;
}
//# sourceMappingURL=vtopic.d.ts.map