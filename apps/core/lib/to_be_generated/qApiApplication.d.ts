import { QApplication as AirportQApplication } from '@airport/air-traffic-control';
import { DbApplication } from '@airport/ground-control';
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
export declare const Q_APPLICATION: LocalQApplication;
export declare const Q: LocalQApplication;
//# sourceMappingURL=qApiApplication.d.ts.map