import {
	AIRPORT_DATABASE,
	QApplication as AirportQApplication
} from '@airport/air-traffic-control'
import { DEPENDENCY_INJECTION } from '@airport/direction-indicator'
import {
	DbApplication,
	EntityId,
	getFullApplicationName
} from '@airport/ground-control';
import { QSituation } from '../generated/qsituation';
import { QSituationRating } from '../generated/qsituationrating';
import { QTheme } from '../generated/qtheme';
import { QTopic } from '../generated/qtopic';
import { QUserTopicFavorite } from '../generated/qusertopicfavorite';


export interface LocalQApplication extends AirportQApplication {

	db: DbApplication;

	Situation: QSituation;
	SituationRating: QSituationRating;
	Theme: QTheme;
	Topic: QTopic;
	UserTopicFavorite: QUserTopicFavorite;

}

const __constructors__ = {
};

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
	domain: 'localhost:8100',
	name: '@sapoto/core'
};
export const Q: LocalQApplication = Q_APPLICATION

DEPENDENCY_INJECTION.db().eventuallyGet(AIRPORT_DATABASE).then((
	airDb
) => {
	airDb.QM[getFullApplicationName(Q_APPLICATION)] = Q
})
