/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator';
import { ReplyRating } from '../ddl/ReplyRating';
import { SituationThread } from '../ddl/SituationThread';
import { Reply } from '../ddl/Reply';
DEPENDENCY_INJECTION.db().get(AIRPORT_DATABASE).then(airDb => {
    const accumulator = airDb.getAccumulator('localhost:8080', 'undefined');
    accumulator.add(ReplyRating, 0);
    accumulator.add(SituationThread, 1);
    accumulator.add(Reply, 2);
});
//# sourceMappingURL=entityMappings.js.map