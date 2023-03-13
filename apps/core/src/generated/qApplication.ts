import {
    QAppInternal
} from '@airport/air-traffic-control'
import {
    DbApplication
} from '@airport/ground-control';
import { QSituation } from './query/QSituation';
import { QSituationRating } from './query/QSituationRating';
import { QTheme } from './query/QTheme';
import { QTopic } from './query/QTopic';
import { QUserTopicFavorite } from './query/QUserTopicFavorite';
import {
  Situation,
  SituationRating,
  Theme,
  Topic,
  UserTopicFavorite
} from '../ddl/ddl';

export interface localhost_colon_8100____at_sapoto_slash_core_LocalQApp extends QAppInternal {

    db: DbApplication;

  Situation: QSituation;
	SituationRating: QSituationRating;
	Theme: QTheme;
	Topic: QTopic;
	UserTopicFavorite: QUserTopicFavorite;

}

const __constructors__ = {
	Situation,
	SituationRating,
	Theme,
	Topic,
	UserTopicFavorite
};

export const Q_localhost_colon_8100____at_sapoto_slash_core: localhost_colon_8100____at_sapoto_slash_core_LocalQApp = <any>{
	__constructors__,
  domain: 'localhost:8100',
  name: '@sapoto/core'
};
export default Q_localhost_colon_8100____at_sapoto_slash_core

export function localhost_colon_8100____at_sapoto_slash_core_diSet(
	dbEntityId: number
): boolean {
	return globalThis.airApi.dS(Q_localhost_colon_8100____at_sapoto_slash_core.__dbApplication__, dbEntityId)
}
if (globalThis.airApi) {
  globalThis.airApi.setQApp(Q_localhost_colon_8100____at_sapoto_slash_core)
}
