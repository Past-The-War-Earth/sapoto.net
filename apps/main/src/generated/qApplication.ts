import {
    airApi,
    QApplication
} from '@airport/aviation-communication'
import {
    DbApplication,
    EntityId,
}                      from '@airport/ground-control';
import { QReply } from './qreply';
import { QReplyRating } from './qreplyrating';
import { QSituationThread } from './qsituationthread';
import {
  Reply,
  ReplyRating,
  SituationThread
} from '../ddl/ddl';

export interface LocalQApplication extends QApplication {

    db: DbApplication;

  Reply: QReply;
	ReplyRating: QReplyRating;
	SituationThread: QSituationThread;

}

const __constructors__ = {
	Reply: Reply,
	ReplyRating: ReplyRating,
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
	return airApi.dS(Q.__dbApplication__, dbEntityId)
}

export function duoDiSet(
	dbEntityId: EntityId
): boolean {
	return airApi.ddS(Q.__dbApplication__, dbEntityId)
}

airApi.setQApplication(Q_APPLICATION)
