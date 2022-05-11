import {
	AIRPORT_DATABASE,
	QApplication as AirportQApplication
}                      from '@airport/air-traffic-control'
import {
	diSet as dS,
	duoDiSet as ddS
}                      from '@airport/check-in'
import {DEPENDENCY_INJECTION} from '@airport/direction-indicator'
import {
	DbApplication,
	DB_APPLICATION_UTILS,
	EntityId,
}                      from '@airport/ground-control';
import { QIdeaUrgencyRating } from './qideaurgencyrating';
import { QReply } from './qreply';
import { QReplyRating } from './qreplyrating';
import { QReplyType } from './qreplytype';
import { QSituationThread } from './qsituationthread';
import {
  IdeaUrgencyRating,
  Reply,
  ReplyRating,
  ReplyType,
  SituationThread
} from '../ddl/ddl';

export interface LocalQApplication extends AirportQApplication {

  db: DbApplication;

	IdeaUrgencyRating: QIdeaUrgencyRating;
	Reply: QReply;
	ReplyRating: QReplyRating;
	ReplyType: QReplyType;
	SituationThread: QSituationThread;

}

const __constructors__ = {
	IdeaUrgencyRating: IdeaUrgencyRating,
	Reply: Reply,
	ReplyRating: ReplyRating,
	ReplyType: ReplyType,
	SituationThread: SituationThread
};

export const Q_APPLICATION: LocalQApplication = <any>{
	__constructors__,
  domain: 'localhost:8080',
  name: '@sapoto/main'
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

DEPENDENCY_INJECTION.db().eventuallyGet(AIRPORT_DATABASE).then((
	airportDatabase, 
) => {
	airportDatabase.setQApplication(Q_APPLICATION)
})
