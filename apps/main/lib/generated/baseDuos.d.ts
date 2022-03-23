import { IIdeaUrgencyRating } from './ideaurgencyrating';
import { IdeaUrgencyRatingESelect, IdeaUrgencyRatingECreateProperties, IdeaUrgencyRatingEUpdateColumns, IdeaUrgencyRatingEUpdateProperties, IdeaUrgencyRatingEId, IdeaUrgencyRatingGraph, QIdeaUrgencyRating } from './qideaurgencyrating';
import { IReply } from './reply';
import { ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply } from './qreply';
import { IReplyRating } from './replyrating';
import { ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating } from './qreplyrating';
import { IReplyType } from './replytype';
import { ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType } from './qreplytype';
import { ISituationThread } from './situationthread';
import { SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread } from './qsituationthread';
import { IDuo, IEntityCascadeGraph, IEntityCreateProperties, IEntityIdProperties, IEntitySelectProperties, IEntityUpdateColumns, IEntityUpdateProperties, IQEntity } from '@airport/air-control';
import { Duo } from '@airport/check-in';
import { EntityId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDuo<Entity, EntitySelect extends IEntitySelectProperties, EntityCreate extends IEntityCreateProperties, EntityUpdateColumns extends IEntityUpdateColumns, EntityUpdateProperties extends IEntityUpdateProperties, EntityId extends IEntityIdProperties, EntityCascadeGraph extends IEntityCascadeGraph, IQE extends IQEntity> extends Duo<Entity, EntitySelect, EntityCreate, EntityUpdateColumns, EntityUpdateProperties, EntityId, EntityCascadeGraph, IQE> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseIdeaUrgencyRatingDuo extends IDuo<IIdeaUrgencyRating, IdeaUrgencyRatingESelect, IdeaUrgencyRatingECreateProperties, IdeaUrgencyRatingEUpdateColumns, IdeaUrgencyRatingEUpdateProperties, IdeaUrgencyRatingEId, IdeaUrgencyRatingGraph, QIdeaUrgencyRating> {
}
export declare class BaseIdeaUrgencyRatingDuo extends SQDIDuo<IIdeaUrgencyRating, IdeaUrgencyRatingESelect, IdeaUrgencyRatingECreateProperties, IdeaUrgencyRatingEUpdateColumns, IdeaUrgencyRatingEUpdateProperties, IdeaUrgencyRatingEId, IdeaUrgencyRatingGraph, QIdeaUrgencyRating> implements IBaseIdeaUrgencyRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReplyDuo extends IDuo<IReply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> {
}
export declare class BaseReplyDuo extends SQDIDuo<IReply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> implements IBaseReplyDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReplyRatingDuo extends IDuo<IReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> {
}
export declare class BaseReplyRatingDuo extends SQDIDuo<IReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> implements IBaseReplyRatingDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReplyTypeDuo extends IDuo<IReplyType, ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType> {
}
export declare class BaseReplyTypeDuo extends SQDIDuo<IReplyType, ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType> implements IBaseReplyTypeDuo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationThreadDuo extends IDuo<ISituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> {
}
export declare class BaseSituationThreadDuo extends SQDIDuo<ISituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> implements IBaseSituationThreadDuo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDuos.d.ts.map