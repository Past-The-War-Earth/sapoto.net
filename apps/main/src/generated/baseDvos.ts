/* eslint-disable */
import {
	Reply,
} from '../ddl/reply';
import {
	ReplyVDescriptor,
} from './vreply';
import {
	ReplyRating,
} from '../ddl/replyrating';
import {
	ReplyRatingVDescriptor,
} from './vreplyrating';
import {
	SituationThread,
} from '../ddl/situationthread';
import {
	SituationThreadVDescriptor,
} from './vsituationthread';
import {
	IDvo,
	Dvo,
} from '@airport/airbridge-validate';
import {
	ApplicationEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


// Application Q object Dependency Injection readiness detection Dvo
export class SQDIDvo<Entity, EntityVDescriptor>
	extends Dvo<Entity, EntityVDescriptor> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseReplyDvo
  extends IDvo<Reply, ReplyVDescriptor> {
}

export class BaseReplyDvo
  extends SQDIDvo<Reply, ReplyVDescriptor>
	implements IBaseReplyDvo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseReplyRatingDvo
  extends IDvo<ReplyRating, ReplyRatingVDescriptor> {
}

export class BaseReplyRatingDvo
  extends SQDIDvo<ReplyRating, ReplyRatingVDescriptor>
	implements IBaseReplyRatingDvo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseSituationThreadDvo
  extends IDvo<SituationThread, SituationThreadVDescriptor> {
}

export class BaseSituationThreadDvo
  extends SQDIDvo<SituationThread, SituationThreadVDescriptor>
	implements IBaseSituationThreadDvo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}
