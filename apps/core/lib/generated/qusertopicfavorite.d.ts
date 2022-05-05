import { IQBooleanField, IQNumberField } from '@airport/air-traffic-control';
import { RepositoryEntityGraph, RepositoryEntityEId, RepositoryEntityEUpdateColumns, RepositoryEntityEUpdateProperties, RepositoryEntityESelect, QRepositoryEntityQId, QRepositoryEntityQRelation, QRepositoryEntity } from '@airport/holding-pattern';
import { TopicGraph, TopicEOptionalId, TopicESelect, QTopicQRelation } from './qtopic';
import { IUserTopicFavorite } from './usertopicfavorite';
/**
 * SELECT - All fields and relations (optional).
 */
export interface UserTopicFavoriteESelect extends RepositoryEntityESelect, UserTopicFavoriteEOptionalId {
    favorite?: boolean | IQBooleanField;
    topic?: TopicESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserTopicFavoriteEId extends RepositoryEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface UserTopicFavoriteEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserTopicFavoriteEUpdateProperties extends RepositoryEntityEUpdateProperties {
    favorite?: boolean | IQBooleanField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserTopicFavoriteGraph extends UserTopicFavoriteEOptionalId, RepositoryEntityGraph {
    favorite?: boolean | IQBooleanField;
    topic?: TopicGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface UserTopicFavoriteEUpdateColumns extends RepositoryEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    SYSTEM_WIDE_OPERATION_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_RECORD_ID?: number | IQNumberField;
    ORIGINAL_REPOSITORY_ID?: number | IQNumberField;
    ORIGINAL_ACTOR_ID?: number | IQNumberField;
    FAVORITE?: boolean | IQBooleanField;
    TOPIC_RID_1?: number | IQNumberField;
    TOPIC_AID_1?: number | IQNumberField;
    TOPIC_ARID_1?: number | IQNumberField;
}
/**
 * CREATE - id fields and relations (required) and non-id fields and relations (optional).
 */
export interface UserTopicFavoriteECreateProperties extends Partial<UserTopicFavoriteEId>, UserTopicFavoriteEUpdateProperties {
}
/**
 * CREATE - id columns (required) and non-id columns (optional).
 */
export interface UserTopicFavoriteECreateColumns extends UserTopicFavoriteEId, UserTopicFavoriteEUpdateColumns {
}
/**
 * Query Entity Query Definition (used for Q.EntityName).
 */
export interface QUserTopicFavorite extends QRepositoryEntity {
    favorite: IQBooleanField;
    topic: QTopicQRelation;
}
export interface QUserTopicFavoriteQId extends QRepositoryEntityQId {
}
export interface QUserTopicFavoriteQRelation extends QRepositoryEntityQRelation<IUserTopicFavorite, QUserTopicFavorite>, QUserTopicFavoriteQId {
}
//# sourceMappingURL=qusertopicfavorite.d.ts.map