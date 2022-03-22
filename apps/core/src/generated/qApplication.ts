import {
	AIRPORT_DATABASE,
	QApplication as AirportQApplication
}                      from '@airport/air-control'
import {
	diSet as dS,
	duoDiSet as ddS
}                      from '@airport/check-in'
import {DI}            from '@airport/di'
import {
	DbApplication,
	EntityId,
	getFullApplicationName
}                      from '@airport/ground-control';
import { QSituation } from './qsituation';
import { QSituationRating } from './qsituationrating';
import { QTheme } from './qtheme';
import { QTopic } from './qtopic';
import { QUserTopicFavorite } from './qusertopicfavorite';
import {
  Situation,
  SituationRating,
  Theme,
  Topic,
  UserTopicFavorite
} from '../ddl/ddl';

export interface LocalQApplication extends AirportQApplication {

  db: DbApplication;

	Situation: QSituation;
	SituationRating: QSituationRating;
	Theme: QTheme;
	Topic: QTopic;
	UserTopicFavorite: QUserTopicFavorite;

}

const __constructors__ = {
	Situation: Situation,
	SituationRating: SituationRating,
	Theme: Theme,
	Topic: Topic,
	UserTopicFavorite: UserTopicFavorite
};

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
  domain: 'localhost:8100',
  name: '@sapoto/core'
};
export const Q: LocalQApplication = Q_APPLICATION

export function diSet(
	dbEntityId: EntityId
): boolean {
	return dS(Q.__dbApplication__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: EntityId
): boolean {
	return ddS(Q.__dbApplication__, dbEntityId)
}

DI.db().eventuallyGet(AIRPORT_DATABASE).then((
	airDb
) => {
	airDb.QM[getFullApplicationName(Q_APPLICATION)] = Q
})
