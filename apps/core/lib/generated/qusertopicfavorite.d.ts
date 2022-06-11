import { IQBooleanField, IQDateField, IQNumberField } from '@airport/air-traffic-control';
import { AirEntityGraph, AirEntityEId, AirEntityEUpdateColumns, AirEntityEUpdateProperties, AirEntityESelect, QAirEntityQId, QAirEntityQRelation, QAirEntity } from '@airport/holding-pattern';
import { TopicGraph, TopicEOptionalId, TopicESelect, QTopicQRelation } from './qtopic';
import { IUserTopicFavorite } from './usertopicfavorite';
/**
 * SELECT - All fields and relations (optional).
 */
export interface UserTopicFavoriteESelect extends AirEntityESelect, UserTopicFavoriteEOptionalId {
    favorite?: boolean | IQBooleanField;
    topic?: TopicESelect;
}
/**
 * DELETE - Ids fields and relations only (required).
 */
export interface UserTopicFavoriteEId extends AirEntityEId {
}
/**
 * Ids fields and relations only (optional).
 */
export interface UserTopicFavoriteEOptionalId {
}
/**
 * UPDATE - non-id fields and relations (optional).
 */
export interface UserTopicFavoriteEUpdateProperties extends AirEntityEUpdateProperties {
    favorite?: boolean | IQBooleanField;
    topic?: TopicEOptionalId;
}
/**
 * PERSIST CASCADE - non-id relations (optional).
 */
export interface UserTopicFavoriteGraph extends UserTopicFavoriteEOptionalId, AirEntityGraph {
    favorite?: boolean | IQBooleanField;
    topic?: TopicGraph;
}
/**
 * UPDATE - non-id columns (optional).
 */
export interface UserTopicFavoriteEUpdateColumns extends AirEntityEUpdateColumns {
    AGE_SUITABILITY?: number | IQNumberField;
    CREATED_AT?: Date | IQDateField;
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
export interface QUserTopicFavorite extends QAirEntity {
    favorite: IQBooleanField;
    topic: QTopicQRelation;
}
export interface QUserTopicFavoriteQId extends QAirEntityQId {
}
export interface QUserTopicFavoriteQRelation extends QAirEntityQRelation<IUserTopicFavorite, QUserTopicFavorite>, QUserTopicFavoriteQId {
}
//# sourceMappingURL=qusertopicfavorite.d.ts.map