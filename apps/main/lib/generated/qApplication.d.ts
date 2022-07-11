import { QApplication } from '@airport/aviation-communication';
import { DbApplication, ApplicationEntity_LocalId } from '@airport/ground-control';
import { QReply } from './qreply';
import { QReplyRating } from './qreplyrating';
import { QSituationThread } from './qsituationthread';
export interface LocalQApplication extends QApplication {
    db: DbApplication;
    Reply: QReply;
    ReplyRating: QReplyRating;
    SituationThread: QSituationThread;
}
export declare const Q_APPLICATION: LocalQApplication;
export declare const Q: LocalQApplication;
export declare function diSet(dbEntityId: ApplicationEntity_LocalId): boolean;
export declare function duoDiSet(dbEntityId: ApplicationEntity_LocalId): boolean;
//# sourceMappingURL=qApplication.d.ts.map