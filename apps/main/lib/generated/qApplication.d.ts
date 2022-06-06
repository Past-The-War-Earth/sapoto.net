import { QApplication } from '@airport/aviation-communication';
import { DbApplication, EntityId } from '@airport/ground-control';
import { QIdeaReplyUrgency } from './qideareplyurgency';
import { QReply } from './qreply';
import { QReplyRating } from './qreplyrating';
import { QReplyType } from './qreplytype';
import { QSituationThread } from './qsituationthread';
export interface LocalQApplication extends QApplication {
    db: DbApplication;
    IdeaReplyUrgency: QIdeaReplyUrgency;
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