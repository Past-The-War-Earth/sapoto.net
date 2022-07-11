import {
    airApi,
    QApplication
} from '@airport/aviation-communication'
import {
    DbApplication,
    ApplicationEntity_LocalId,
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

export interface LocalQApplication extends QApplication {

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
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.dS(Q.__dbApplication__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: ApplicationEntity_LocalId
): boolean {
	return airApi.ddS(Q.__dbApplication__, dbEntityId)
}

airApi.setQApplication(Q_APPLICATION)
