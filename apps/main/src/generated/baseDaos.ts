/* eslint-disable */
import {
	IdeaUrgencyRating,
} from '../ddl/ideaurgencyrating';
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
	ReplyType,
} from '../ddl/replytype';
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
	IDao,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/air-traffic-control';
import {
	Dao,
	DaoQueryDecorators,
} from '@airport/check-in';
import {
	EntityId as DbEntityId,
} from '@airport/ground-control';
import {
	Q,
	duoDiSet,
} from './qApplication';


// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
	EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	EntityId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity>
	extends Dao<Entity,
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


export interface IBaseIdeaUrgencyRatingDao
  extends IDao<IdeaUrgencyRating, IdeaUrgencyRatingESelect, IdeaUrgencyRatingECreateProperties, IdeaUrgencyRatingEUpdateColumns, IdeaUrgencyRatingEUpdateProperties, IdeaUrgencyRatingEId, IdeaUrgencyRatingGraph, QIdeaUrgencyRating> {
}

export class BaseIdeaUrgencyRatingDao
  extends SQDIDao<IdeaUrgencyRating, IdeaUrgencyRatingESelect, IdeaUrgencyRatingECreateProperties, IdeaUrgencyRatingEUpdateColumns, IdeaUrgencyRatingEUpdateProperties, IdeaUrgencyRatingEId, IdeaUrgencyRatingGraph, QIdeaUrgencyRating>
	implements IBaseIdeaUrgencyRatingDao {
	
	static Find      = new DaoQueryDecorators<IdeaUrgencyRatingESelect>();
	static FindOne   = new DaoQueryDecorators<IdeaUrgencyRatingESelect>();
	static Search    = new DaoQueryDecorators<IdeaUrgencyRatingESelect>();
	static SearchOne = new DaoQueryDecorators<IdeaUrgencyRatingESelect>();
	static Save(
		config: IdeaUrgencyRatingGraph
	): PropertyDecorator {
		return Dao.BaseSave<IdeaUrgencyRatingGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}


export interface IBaseReplyDao
  extends IDao<Reply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply> {
}

export class BaseReplyDao
  extends SQDIDao<Reply, ReplyESelect, ReplyECreateProperties, ReplyEUpdateColumns, ReplyEUpdateProperties, ReplyEId, ReplyGraph, QReply>
	implements IBaseReplyDao {
	
	static Find      = new DaoQueryDecorators<ReplyESelect>();
	static FindOne   = new DaoQueryDecorators<ReplyESelect>();
	static Search    = new DaoQueryDecorators<ReplyESelect>();
	static SearchOne = new DaoQueryDecorators<ReplyESelect>();
	static Save(
		config: ReplyGraph
	): PropertyDecorator {
		return Dao.BaseSave<ReplyGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseReplyRatingDao
  extends IDao<ReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating> {
}

export class BaseReplyRatingDao
  extends SQDIDao<ReplyRating, ReplyRatingESelect, ReplyRatingECreateProperties, ReplyRatingEUpdateColumns, ReplyRatingEUpdateProperties, ReplyRatingEId, ReplyRatingGraph, QReplyRating>
	implements IBaseReplyRatingDao {
	
	static Find      = new DaoQueryDecorators<ReplyRatingESelect>();
	static FindOne   = new DaoQueryDecorators<ReplyRatingESelect>();
	static Search    = new DaoQueryDecorators<ReplyRatingESelect>();
	static SearchOne = new DaoQueryDecorators<ReplyRatingESelect>();
	static Save(
		config: ReplyRatingGraph
	): PropertyDecorator {
		return Dao.BaseSave<ReplyRatingGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseReplyTypeDao
  extends IDao<ReplyType, ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType> {
}

export class BaseReplyTypeDao
  extends SQDIDao<ReplyType, ReplyTypeESelect, ReplyTypeECreateProperties, ReplyTypeEUpdateColumns, ReplyTypeEUpdateProperties, ReplyTypeEId, ReplyTypeGraph, QReplyType>
	implements IBaseReplyTypeDao {
	
	static Find      = new DaoQueryDecorators<ReplyTypeESelect>();
	static FindOne   = new DaoQueryDecorators<ReplyTypeESelect>();
	static Search    = new DaoQueryDecorators<ReplyTypeESelect>();
	static SearchOne = new DaoQueryDecorators<ReplyTypeESelect>();
	static Save(
		config: ReplyTypeGraph
	): PropertyDecorator {
		return Dao.BaseSave<ReplyTypeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseSituationThreadDao
  extends IDao<SituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread> {
}

export class BaseSituationThreadDao
  extends SQDIDao<SituationThread, SituationThreadESelect, SituationThreadECreateProperties, SituationThreadEUpdateColumns, SituationThreadEUpdateProperties, SituationThreadEId, SituationThreadGraph, QSituationThread>
	implements IBaseSituationThreadDao {
	
	static Find      = new DaoQueryDecorators<SituationThreadESelect>();
	static FindOne   = new DaoQueryDecorators<SituationThreadESelect>();
	static Search    = new DaoQueryDecorators<SituationThreadESelect>();
	static SearchOne = new DaoQueryDecorators<SituationThreadESelect>();
	static Save(
		config: SituationThreadGraph
	): PropertyDecorator {
		return Dao.BaseSave<SituationThreadGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}
