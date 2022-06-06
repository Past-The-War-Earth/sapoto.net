import { IdeaReplyUrgency } from '../ddl/ideareplyurgency';
import { IdeaReplyUrgencyESelect, IdeaReplyUrgencyECreateProperties, IdeaReplyUrgencyEUpdateColumns, IdeaReplyUrgencyEUpdateProperties, IdeaReplyUrgencyEId, IdeaReplyUrgencyGraph, QIdeaReplyUrgency } from './qideareplyurgency';
import { Reply } from '../ddl/reply';
import { ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply } from './qreply';
import { ReplyRating } from '../ddl/replyrating';
import { ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating } from './qreplyrating';
import { ReplyType } from '../ddl/replytype';
import { ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType } from './qreplytype';
import { SituationThread } from '../ddl/situationthread';
import { SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread } from './qsituationthread';
import { IDuo, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-traffic-control';
import { Duo } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDuo<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Duo<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseIdeaReplyUrgencyDuo extends IDuo<IdeaReplyUrgency, IdeaReplyUrgencyESelect, IdeaReplyUrgencyECreateProperties, IdeaReplyUrgencyEUpdateColumns, IdeaReplyUrgencyEUpdateProperties, IdeaReplyUrgencyEId, IdeaReplyUrgencyGraph, QIdeaReplyUrgency> {
}
export declare class BaseIdeaReplyUrgencyDuo extends SQDIDuo<IdeaReplyUrgency, IdeaReplyUrgencyESelect, IdeaReplyUrgencyECreateProperties, IdeaReplyUrgencyEUpdateColumns, IdeaReplyUrgencyEUpdateProperties, IdeaReplyUrgencyEId, IdeaReplyUrgencyGraph, QIdeaReplyUrgency> implements IBaseIdeaReplyUrgencyDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReplyDuo extends IDuo<Reply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> {
}
export declare class BaseReplyDuo extends SQDIDuo<Reply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> implements IBaseReplyDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReplyRatingDuo extends IDuo<ReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> {
}
export declare class BaseReplyRatingDuo extends SQDIDuo<ReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> implements IBaseReplyRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReplyTypeDuo extends IDuo<ReplyType, ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType> {
}
export declare class BaseReplyTypeDuo extends SQDIDuo<ReplyType, ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType> implements IBaseReplyTypeDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationThreadDuo extends IDuo<SituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> {
}
export declare class BaseSituationThreadDuo extends SQDIDuo<SituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> implements IBaseSituationThreadDuo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDuos.d.ts.map