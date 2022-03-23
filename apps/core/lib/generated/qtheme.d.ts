import { IQNumberField, IQStringField, IQRepositoryEntityOneToManyRelation } from '@airport/air-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { TopicGraph, TopicESelect, QTopic } from './qtopic';
import { ITopic } from './topic';
import { ITheme } from './theme';
/**
 * SELECT - All fields and relations (optional).
 */
export interface ThemeESelect extends RepositoryEntityESelect, ThemeEOptionalId {
    name?: string | IQStringField;
    imageName?: string | IQStringField;
    topics?: TopicESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface ThemeEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface ThemeEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface ThemeEUpdateProperties extends RepositoryEntityEUpdateProperties {
    name?: string | IQStringField;
    imageName?: string | IQStringField;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface ThemeGraph extends ThemeEOptionalId, RepositoryEntityGraph {
    name?: string | IQStringField;
    imageName?: string | IQStringField;
    topics?: TopicGraph[];
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface ThemeEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
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
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QTheme extends QRepositoryEntity {
    name: IQStringField;
    imageName: IQStringField;
    topics: IQRepositoryEntityOneToManyRelation<ITopic, QTopic>;
}
export interface QThemeQId extends QRepositoryEntityQId {
}
export interface QThemeQRelation extends QRepositoryEntityQRelation<ITheme, QTheme>, QThemeQId {
}
//# sourceMappingURL=qtheme.d.ts.map