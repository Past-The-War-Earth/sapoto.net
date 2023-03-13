/* eslint-disable */
import { AIRPORT_DATABASE } from '@airport/air-traffic-control';
import { IOC } from '@airport/direction-indicator';
import { SituationRating } from '../ddl/SituationRating';
import { Theme } from '../ddl/Theme';
import { Topic } from '../ddl/Topic';
import { Situation } from '../ddl/Situation';
import { UserTopicFavorite } from '../ddl/UserTopicFavorite';

IOC.get(AIRPORT_DATABASE).then(airDb => {
  const accumulator = airDb.getAccumulator('localhost:8100', 'undefined');
  accumulator.add(SituationRating, 0);
  accumulator.add(Theme, 1);
  accumulator.add(Topic, 2);
  accumulator.add(Situation, 3);
  accumulator.add(UserTopicFavorite, 4);
});
