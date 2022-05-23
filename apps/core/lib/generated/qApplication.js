import { airApi } from '@airport/aviation-communication';
import { Situation, SituationRating, Theme, Topic, UserTopicFavorite } from '../ddl/ddl';
const __constructors__ = {
    Situation: Situation,
    SituationRating: SituationRating,
    Theme: Theme,
    Topic: Topic,
    UserTopicFavorite: UserTopicFavorite
};
export const Q_APPLICATION = {
    __constructors__,
    domain: 'localhost:8100',
    name: '@sapoto/core'
};
export const Q = Q_APPLICATION;
export function diSet(dbEntityId) {
    return airApi.dS(Q.__dbApplication__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return airApi.ddS(Q.__dbApplication__, dbEntityId);
}
airApi.setQApplication(Q_APPLICATION);
//# sourceMappingURL=qApplication.js.map