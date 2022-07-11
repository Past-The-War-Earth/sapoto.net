import { IQDateField, IQNumberField, IQStringField, IQAirEntityOneToManyRelation } from '@airport/tarmaq-query';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { TopicGraph, TopicESelect, QTopic } from './qtopic';
import { ITopic } from './topic';
import { ITheme } from './theme';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ThemeESelect extends AirEntityESelect, ThemeEOptionalId {
    name?: string | IQStringField;
    imageName?: string | IQStringField;
    topics?: TopicESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ThemeEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ThemeEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ThemeEUpdateProperties extends AirEntityEUpdateProperties {
    name?: string | IQStringField;
    imageName?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ThemeGraph extends ThemeEOptionalId, AirEntityGraph {
    name?: string | IQStringField;
    imageName?: string | IQStringField;
    topics?: TopicGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ThemeEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
    SYSTEM_WIDE_OPERATION_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_LID?: number | IQNumberField;
    ORIGINAL_ACTOR_LID?: number | IQNumberField;
    NAME?: string | IQStringField;
    IMAGENAME?: string | IQStringField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface ThemeECreateProperties extends Partial<ThemeEId>, ThemeEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface ThemeECreateColumns extends ThemeEId, ThemeEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.ApplicationEntity_Name).
 */
export interface QTheme extends QAirEntity {
    name: IQStringField;
    imageName: IQStringField;
    topics: IQAirEntityOneToManyRelation<ITopic, QTopic>;
}
export interface QThemeQId extends QAirEntityQId {
}
export interface QThemeQRelation extends QAirEntityQRelation<ITheme, QTheme>, QThemeQId {
}
//# sourceMappingURL=qtheme.d.ts.map