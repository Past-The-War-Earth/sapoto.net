import { QApplication as AirportQApplication } from '@airport/air-traffic-control';
import { DbApplication, EntityId } from '@airport/ground-control';
import { QIdeaUrgencyRating } from './qideaurgencyrating';
import { QReply } from './qreply';
import { QReplyRating } from './qreplyrating';
import { QReplyType } from './qreplytype';
import { QSituationThread } from './qsituationthread';
export interface LocalQApplication extends AirportQApplication {
    db: DbApplication;
    IdeaUrgencyRating: QIdeaUrgencyRating;
    Reply: QReply;
    ReplyRating: QReplyRating;
    ReplyType: QReplyType;
    SituationThread: QSituationThread;
}
export declare const Q_APPLICATION: LocalQApplication;
export declare const Q: LocalQApplication;
export declare function diSet(dbEntityId: EntityId): boolean;
export declare function duoDiSet(dbEntityId: EntityId): boolean;
//# sourceMappingURL=qApplication.d.ts.map