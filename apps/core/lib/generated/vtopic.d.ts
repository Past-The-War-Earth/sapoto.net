import { IVStringField } from '@airbridge/validate';
import { AirEntityVDescriptor } from '@airport/holding-pattern/lib/to_be_generated/runtime-index';
import { ThemeVDescriptor } from './vtheme';
import { Theme } from '../ddl/Theme';
import { SituationVDescriptor } from './vsituation';
import { Situation } from '../ddl/Situation';
export interface TopicVDescriptor<T> extends AirEntityVDescriptor<T> {
    name?: string | IVStringField;
    imagePath?: string | IVStringField;
    theme?: ThemeVDescriptor<Theme>;
    situations?: SituationVDescriptor<Situation>;
}
//# sourceMappingURL=vtopic.d.ts.map