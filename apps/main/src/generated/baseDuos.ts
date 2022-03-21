/* eslint-disable */
import {
	IIdeaUrgencyRating,
} from './ideaurgencyrating';
import {
	IdeaUrgencyRatingESelect,
	IdeaUrgencyRatingECreateColumns,
	IdeaUrgencyRatingECreateProperties,
	IdeaUrgencyRatingEUpdateColumns,
	IdeaUrgencyRatingEUpdateProperties,
	IdeaUrgencyRatingEId,
	IdeaUrgencyRatingGraph,
	QIdeaUrgencyRating,
} from './qideaurgencyrating';
import {
	IReply,
} from './reply';
import {
	ReplyESelect,
	ReplyECreateColumns,
	ReplyECreateProperties,
	ReplyEUpdateColumns,
	ReplyEUpdateProperties,
	ReplyEId,
	ReplyGraph,
	QReply,
} from './qreply';
import {
	IReplyRating,
} from './replyrating';
import {
	ReplyRatingESelect,
	ReplyRatingECreateColumns,
	ReplyRatingECreateProperties,
	ReplyRatingEUpdateColumns,
	ReplyRatingEUpdateProperties,
	ReplyRatingEId,
	ReplyRatingGraph,
	QReplyRating,
} from './qreplyrating';
import {
	IReplyType,
} from './replytype';
import {
	ReplyTypeESelect,
	ReplyTypeECreateColumns,
	ReplyTypeECreateProperties,
	ReplyTypeEUpdateColumns,
	ReplyTypeEUpdateProperties,
	ReplyTypeEId,
	ReplyTypeGraph,
	QReplyType,
} from './qreplytype';
import {
	ISituationThread,
} from './situationthread';
import {
	SituationThreadESelect,
	SituationThreadECreateColumns,
	SituationThreadECreateProperties,
	SituationThreadEUpdateColumns,
	SituationThreadEUpdateProperties,
	SituationThreadEId,
	SituationThreadGraph,
	QSituationThread,
} from './qsituationthread';
import {
	IDuo,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/air-control';
import {
	Duo,
} from '@airport/check-in';
import {
	EntityId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


// Application Q object Dependency Injection readiness detection Duo
export class SQDIDuo<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
	EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity>
	extends Duo<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateColumns,
		EntityUpdateProperties,
		EntityId,
		EntityCascadeGraph,
		IQE> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseIdeaUrgencyRatingDuo
  extends IDuo<IIdeaUrgencyRating, IdeaUrgencyRatingESelect, IdeaUrgencyRatingECreateProperties, IdeaUrgencyRatingEUpdateColumns, IdeaUrgencyRatingEUpdateProperties, IdeaUrgencyRatingEId, IdeaUrgencyRatingGraph, QIdeaUrgencyRating> {
}

export class BaseIdeaUrgencyRatingDuo
  extends SQDIDuo<IIdeaUrgencyRating, IdeaUrgencyRatingESelect, IdeaUrgencyRatingECreateProperties, IdeaUrgencyRatingEUpdateColumns, IdeaUrgencyRatingEUpdateProperties, IdeaUrgencyRatingEId, IdeaUrgencyRatingGraph, QIdeaUrgencyRating>
	implements IBaseIdeaUrgencyRatingDuo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseReplyDuo
  extends IDuo<IReply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> {
}

export class BaseReplyDuo
  extends SQDIDuo<IReply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply>
	implements IBaseReplyDuo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseReplyRatingDuo
  extends IDuo<IReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> {
}

export class BaseReplyRatingDuo
  extends SQDIDuo<IReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating>
	implements IBaseReplyRatingDuo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseReplyTypeDuo
  extends IDuo<IReplyType, ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType> {
}

export class BaseReplyTypeDuo
  extends SQDIDuo<IReplyType, ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType>
	implements IBaseReplyTypeDuo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseSituationThreadDuo
  extends IDuo<ISituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> {
}

export class BaseSituationThreadDuo
  extends SQDIDuo<ISituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread>
	implements IBaseSituationThreadDuo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}
