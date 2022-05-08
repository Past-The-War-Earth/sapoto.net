import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { diSet as dS, duoDiSet as ddS } from '@airport/check-in';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
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
    return dS(Q.__dbApplication__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return ddS(Q.__dbApplication__, dbEntityId);
}
DEPENDENCY_INJECTION.db().eventuallyGet(AIRPORT_DATABASE).then((airportDatabase) => {
    airportDatabase.setQApplication(Q_APPLICATION);
});
//# sourceMappingURL=qApplication.js.map