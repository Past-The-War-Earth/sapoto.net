/* eslint-disable */
import {
	Reply,
} from '../ddl/reply';
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
	ReplyRating,
} from '../ddl/replyrating';
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
	SituationThread,
} from '../ddl/situationthread';
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
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/tarmaq-query';
import {
	IDuo,
	Duo,
} from '@airport/tarmaq-dao';
import {
	ApplicationEntity_LocalId as DbEntityId,
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
	ApplicationEntity_LocalId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity>
	extends Duo<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateColumns,
		EntityUpdateProperties,
		ApplicationEntity_LocalId,
		EntityCascadeGraph,
		IQE> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseReplyDuo
  extends IDuo<Reply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> {
}

export class BaseReplyDuo
  extends SQDIDuo<Reply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply>
	implements IBaseReplyDuo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseReplyRatingDuo
  extends IDuo<ReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> {
}

export class BaseReplyRatingDuo
  extends SQDIDuo<ReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating>
	implements IBaseReplyRatingDuo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseSituationThreadDuo
  extends IDuo<SituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> {
}

export class BaseSituationThreadDuo
  extends SQDIDuo<SituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread>
	implements IBaseSituationThreadDuo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}
