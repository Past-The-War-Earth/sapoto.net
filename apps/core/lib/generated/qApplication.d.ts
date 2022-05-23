import { QApplication } from '@airport/aviation-communication';
import { DbApplication, EntityId } from '@airport/ground-control';
import { QSituation } from './qsituation';
import { QSituationRating } from './qsituationrating';
import { QTheme } from './qtheme';
import { QTopic } from './qtopic';
import { QUserTopicFavorite } from './qusertopicfavorite';
export interface LocalQApplication extends QApplication {
    db: DbApplication;
    Situation: QSituation;
    SituationRating: QSituationRating;
    Theme: QTheme;
    Topic: QTopic;
    UserTopicFavorite: QUserTopicFavorite;
}
export declare const Q_APPLICATION: LocalQApplication;
export declare const Q: LocalQApplication;
export declare function diSet(dbEntityId: EntityId): boolean;
export declare function duoDiSet(dbEntityId: EntityId): boolean;
//# sourceMappingURL=qApplication.d.ts.map