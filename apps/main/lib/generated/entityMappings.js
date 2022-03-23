/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-control';
import { DI } from '@airport/di';
import { ReplyRating } from '../ddl/ReplyRating';
import { ReplyType } from '../ddl/ReplyType';
import { SituationThread } from '../ddl/SituationThread';
import { Reply } from '../ddl/Reply';
import { IdeaUrgencyRating } from '../ddl/IdeaUrgencyRating';
DI.db().get(AIRPORT_DATABASE).then(airDb => {
    const accumulator = airDb.getAccumulator('localhost:8100', 'undefined');
    accumulator.add(ReplyRating, 0);
    accumulator.add(ReplyType, 1);
    accumulator.add(SituationThread, 2);
    accumulator.add(Reply, 3);
    accumulator.add(IdeaUrgencyRating, 4);
});
//# sourceMappingURL=entityMappings.js.map