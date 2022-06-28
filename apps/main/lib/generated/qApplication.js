import { airApi } from '@airport/aviation-communication';
import { Reply, ReplyRating, ReplyType, SituationThread } from '../ddl/ddl';
const __constructors__ = {
    Reply: Reply,
    ReplyRating: ReplyRating,
    ReplyType: ReplyType,
    SituationThread: SituationThread
};
export const Q_APPLICATION = {
    __constructors__,
    domain: 'localhost:8080',
    name: '@sapoto/main'
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