import { Dao, DaoQueryDecorators, } from '@airport/check-in';
import { Q, duoDiSet, } from './qApplication';
// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao extends Dao {
    constructor(dbEntityId) {
        super(dbEntityId, Q);
    }
}
export class BaseReplyDao extends SQDIDao {
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
BaseReplyDao.Find = new DaoQueryDecorators();
BaseReplyDao.FindOne = new DaoQueryDecorators();
BaseReplyDao.Search = new DaoQueryDecorators();
BaseReplyDao.SearchOne = new DaoQueryDecorators();
export class BaseReplyRatingDao extends SQDIDao {
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
BaseReplyRatingDao.Find = new DaoQueryDecorators();
BaseReplyRatingDao.FindOne = new DaoQueryDecorators();
BaseReplyRatingDao.Search = new DaoQueryDecorators();
BaseReplyRatingDao.SearchOne = new DaoQueryDecorators();
export class BaseSituationThreadDao extends SQDIDao {
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
BaseSituationThreadDao.Find = new DaoQueryDecorators();
BaseSituationThreadDao.FindOne = new DaoQueryDecorators();
BaseSituationThreadDao.Search = new DaoQueryDecorators();
BaseSituationThreadDao.SearchOne = new DaoQueryDecorators();
//# sourceMappingURL=baseDaos.js.map