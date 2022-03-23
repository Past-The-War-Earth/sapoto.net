import { Dao, DaoQueryDecorators, } from '@airport/check-in';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseSituationDao extends SQDIDao {
    constructor() {
        super(3);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(3);
    }
}
BaseSituationDao.Find = new DaoQueryDecorators();
BaseSituationDao.FindOne = new DaoQueryDecorators();
BaseSituationDao.Search = new DaoQueryDecorators();
BaseSituationDao.SearchOne = new DaoQueryDecorators();
export class BaseSituationRatingDao extends SQDIDao {
    constructor() {
        super(0);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(0);
    }
}
BaseSituationRatingDao.Find = new DaoQueryDecorators();
BaseSituationRatingDao.FindOne = new DaoQueryDecorators();
BaseSituationRatingDao.Search = new DaoQueryDecorators();
BaseSituationRatingDao.SearchOne = new DaoQueryDecorators();
export class BaseThemeDao extends SQDIDao {
    constructor() {
        super(1);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(1);
    }
}
BaseThemeDao.Find = new DaoQueryDecorators();
BaseThemeDao.FindOne = new DaoQueryDecorators();
BaseThemeDao.Search = new DaoQueryDecorators();
BaseThemeDao.SearchOne = new DaoQueryDecorators();
export class BaseTopicDao extends SQDIDao {
    constructor() {
        super(2);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(2);
    }
}
BaseTopicDao.Find = new DaoQueryDecorators();
BaseTopicDao.FindOne = new DaoQueryDecorators();
BaseTopicDao.Search = new DaoQueryDecorators();
BaseTopicDao.SearchOne = new DaoQueryDecorators();
export class BaseUserTopicFavoriteDao extends SQDIDao {
    constructor() {
        super(4);
    }
    static Save(config) {
        return Dao.BaseSave(config);
    }
    static diSet() {
        return duoDiSet(4);
    }
}
BaseUserTopicFavoriteDao.Find = new DaoQueryDecorators();
BaseUserTopicFavoriteDao.FindOne = new DaoQueryDecorators();
BaseUserTopicFavoriteDao.Search = new DaoQueryDecorators();
BaseUserTopicFavoriteDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map