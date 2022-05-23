import { IdeaUrgencyRating } from '../ddl/ideaurgencyrating';
import { IdeaUrgencyRatingESelect, IdeaUrgencyRatingECreateProperties, IdeaUrgencyRatingEUpdateColumns, IdeaUrgencyRatingEUpdateProperties, IdeaUrgencyRatingEId, IdeaUrgencyRatingGraph, QIdeaUrgencyRating } from './qideaurgencyrating';
import { Reply } from '../ddl/reply';
import { ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply } from './qreply';
import { ReplyRating } from '../ddl/replyrating';
import { ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating } from './qreplyrating';
import { ReplyType } from '../ddl/replytype';
import { ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType } from './qreplytype';
import { SituationThread } from '../ddl/situationthread';
import { SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread } from './qsituationthread';
import { IDao, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-traffic-control';
import { Dao, DaoQueryDecorators } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseIdeaUrgencyRatingDao extends IDao<IdeaUrgencyRating, IdeaUrgencyRatingESelect, IdeaUrgencyRatingECreateProperties, IdeaUrgencyRatingEUpdateColumns, IdeaUrgencyRatingEUpdateProperties, IdeaUrgencyRatingEId, IdeaUrgencyRatingGraph, QIdeaUrgencyRating> {
}
export declare class BaseIdeaUrgencyRatingDao extends SQDIDao<IdeaUrgencyRating, IdeaUrgencyRatingESelect, IdeaUrgencyRatingECreateProperties, IdeaUrgencyRatingEUpdateColumns, IdeaUrgencyRatingEUpdateProperties, IdeaUrgencyRatingEId, IdeaUrgencyRatingGraph, QIdeaUrgencyRating> implements IBaseIdeaUrgencyRatingDao {
    static Find: DaoQueryDecorators<IdeaUrgencyRatingESelect>;
    static FindOne: DaoQueryDecorators<IdeaUrgencyRatingESelect>;
    static Search: DaoQueryDecorators<IdeaUrgencyRatingESelect>;
    static SearchOne: DaoQueryDecorators<IdeaUrgencyRatingESelect>;
    static Save(config: IdeaUrgencyRatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseReplyDao extends IDao<Reply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> {
}
export declare class BaseReplyDao extends SQDIDao<Reply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> implements IBaseReplyDao {
    static Find: DaoQueryDecorators<ReplyESelect>;
    static FindOne: DaoQueryDecorators<ReplyESelect>;
    static Search: DaoQueryDecorators<ReplyESelect>;
    static SearchOne: DaoQueryDecorators<ReplyESelect>;
    static Save(config: ReplyGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseReplyRatingDao extends IDao<ReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> {
}
export declare class BaseReplyRatingDao extends SQDIDao<ReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> implements IBaseReplyRatingDao {
    static Find: DaoQueryDecorators<ReplyRatingESelect>;
    static FindOne: DaoQueryDecorators<ReplyRatingESelect>;
    static Search: DaoQueryDecorators<ReplyRatingESelect>;
    static SearchOne: DaoQueryDecorators<ReplyRatingESelect>;
    static Save(config: ReplyRatingGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseReplyTypeDao extends IDao<ReplyType, ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType> {
}
export declare class BaseReplyTypeDao extends SQDIDao<ReplyType, ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType> implements IBaseReplyTypeDao {
    static Find: DaoQueryDecorators<ReplyTypeESelect>;
    static FindOne: DaoQueryDecorators<ReplyTypeESelect>;
    static Search: DaoQueryDecorators<ReplyTypeESelect>;
    static SearchOne: DaoQueryDecorators<ReplyTypeESelect>;
    static Save(config: ReplyTypeGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationThreadDao extends IDao<SituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> {
}
export declare class BaseSituationThreadDao extends SQDIDao<SituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> implements IBaseSituationThreadDao {
    static Find: DaoQueryDecorators<SituationThreadESelect>;
    static FindOne: DaoQueryDecorators<SituationThreadESelect>;
    static Search: DaoQueryDecorators<SituationThreadESelect>;
    static SearchOne: DaoQueryDecorators<SituationThreadESelect>;
    static Save(config: SituationThreadGraph): PropertyDecorator;
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDaos.d.ts.map