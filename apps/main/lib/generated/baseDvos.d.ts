import { Reply } from '../ddl/reply';
import { ReplyVDescriptor } from './vreply';
import { ReplyRating } from '../ddl/replyrating';
import { ReplyRatingVDescriptor } from './vreplyrating';
import { SituationThread } from '../ddl/situationthread';
import { SituationThreadVDescriptor } from './vsituationthread';
import { IDvo, Dvo } from '@airport/airbridge-validate';
import { ApplicationEntity_LocalId as DbEntityId } from '@airport/ground-control';
export declare class SQDIDvo<Entity, EntityVDescriptor> extends Dvo<Entity, EntityVDescriptor> {
    constructor(dbEntityId: DbEntityId);
}
export interface IBaseReplyDvo extends IDvo<Reply, ReplyVDescriptor> {
}
export declare class BaseReplyDvo extends SQDIDvo<Reply, ReplyVDescriptor> implements IBaseReplyDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseReplyRatingDvo extends IDvo<ReplyRating, ReplyRatingVDescriptor> {
}
export declare class BaseReplyRatingDvo extends SQDIDvo<ReplyRating, ReplyRatingVDescriptor> implements IBaseReplyRatingDvo {
    static diSet(): boolean;
    constructor();
}
export interface IBaseSituationThreadDvo extends IDvo<SituationThread, SituationThreadVDescriptor> {
}
export declare class BaseSituationThreadDvo extends SQDIDvo<SituationThread, SituationThreadVDescriptor> implements IBaseSituationThreadDvo {
    static diSet(): boolean;
    constructor();
}
//# sourceMappingURL=baseDvos.d.ts.map