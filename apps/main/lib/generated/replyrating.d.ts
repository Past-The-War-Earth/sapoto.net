import { IRepositoryEntity } from '@airport/holding-pattern';
import { IReply } from './reply';
export interface IReplyRating extends IRepositoryEntity {
    rating?: number;
    urgency?: number;
    reply?: IReply;
}
//# sourceMappingURL=replyrating.d.ts.map