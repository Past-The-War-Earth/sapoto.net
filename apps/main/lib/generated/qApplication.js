import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { diSet as dS, duoDiSet as ddS } from '@airport/check-in';
import { DI } from '@airport/di';
import { getFullApplicationName } from '@airport/ground-control';
import { IdeaUrgencyRating, Reply, ReplyRating, ReplyType, SituationThread } from '../ddl/ddl';
const __constructors__ = {
    IdeaUrgencyRating: IdeaUrgencyRating,
    Reply: Reply,
    ReplyRating: ReplyRating,
    ReplyType: ReplyType,
    SituationThread: SituationThread
};
export const Q_APPLICATION = {
    __constructors__,
    domain: 'localhost:8100',
    name: '@sapoto/main'
};
export const Q = Q_APPLICATION;
export function diSet(dbEntityId) {
    return dS(Q.__dbApplication__, dbEntityId);
}
export function duoDiSet(dbEntityId) {
    return ddS(Q.__dbApplication__, dbEntityId);
}
DI.db().eventuallyGet(AIRPORT_DATABASE).then((airDb) => {
    airDb.QM[getFullApplicationName(Q_APPLICATION)] = Q;
});
//# sourceMappingURL=qApplication.js.map