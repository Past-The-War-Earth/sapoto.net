import { Reply } from '../ddl/reply';
import { ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply } from './qreply';
import { ReplyRating } from '../ddl/replyrating';
import { ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating } from './qreplyrating';
import { SituationThread } from '../ddl/situationthread';
import { SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread } from './qsituationthread';
import { IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/tarmaq-query';
import { IDao, Dao, DaoQueryDecorators } from '@airport/tarmaq-dao';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDao<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, ApplicationEntity_LocalId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Dao<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, ApplicationEntity_LocalId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
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