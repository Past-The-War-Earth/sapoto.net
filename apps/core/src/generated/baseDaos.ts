/* eslint-disable */
import {
	ISituation,
} from './situation';
import {
	SituationESelect,
	SituationECreateColumns,
	SituationECreateProperties,
	SituationEUpdateColumns,
	SituationEUpdateProperties,
	SituationEId,
	SituationGraph,
	QSituation,
} from './qsituation';
import {
	ISituationRating,
} from './situationrating';
import {
	SituationRatingESelect,
	SituationRatingECreateColumns,
	SituationRatingECreateProperties,
	SituationRatingEUpdateColumns,
	SituationRatingEUpdateProperties,
	SituationRatingEId,
	SituationRatingGraph,
	QSituationRating,
} from './qsituationrating';
import {
	ITheme,
} from './theme';
import {
	ThemeESelect,
	ThemeECreateColumns,
	ThemeECreateProperties,
	ThemeEUpdateColumns,
	ThemeEUpdateProperties,
	ThemeEId,
	ThemeGraph,
	QTheme,
} from './qtheme';
import {
	ITopic,
} from './topic';
import {
	TopicESelect,
	TopicECreateColumns,
	TopicECreateProperties,
	TopicEUpdateColumns,
	TopicEUpdateProperties,
	TopicEId,
	TopicGraph,
	QTopic,
} from './qtopic';
import {
	IUserTopicFavorite,
} from './usertopicfavorite';
import {
	UserTopicFavoriteESelect,
	UserTopicFavoriteECreateColumns,
	UserTopicFavoriteECreateProperties,
	UserTopicFavoriteEUpdateColumns,
	UserTopicFavoriteEUpdateProperties,
	UserTopicFavoriteEId,
	UserTopicFavoriteGraph,
	QUserTopicFavorite,
} from './qusertopicfavorite';
import {
	IDao,
	IEntityCascadeGraph,
	IEntityCreateProperties,
	IEntityIdProperties,
	IEntitySelectProperties,
	IEntityUpdateColumns,
	IEntityUpdateProperties,
	IQEntity,
} from '@airport/air-control';
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


export interface IBaseSituationDao
  extends IDao<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}

export class BaseSituationDao
  extends SQDIDao<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation>
	implements IBaseSituationDao {
	
	static Find      = new DaoQueryDecorators<SituationESelect>();
	static FindOne   = new DaoQueryDecorators<SituationESelect>();
	static Search    = new DaoQueryDecorators<SituationESelect>();
	static SearchOne = new DaoQueryDecorators<SituationESelect>();
	static Save(
		config: SituationGraph
	): PropertyDecorator {
		return Dao.BaseSave<SituationGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseSituationRatingDao
  extends IDao<ISituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating> {
}

export class BaseSituationRatingDao
  extends SQDIDao<ISituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating>
	implements IBaseSituationRatingDao {
	
	static Find      = new DaoQueryDecorators<SituationRatingESelect>();
	static FindOne   = new DaoQueryDecorators<SituationRatingESelect>();
	static Search    = new DaoQueryDecorators<SituationRatingESelect>();
	static SearchOne = new DaoQueryDecorators<SituationRatingESelect>();
	static Save(
		config: SituationRatingGraph
	): PropertyDecorator {
		return Dao.BaseSave<SituationRatingGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseThemeDao
  extends IDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}

export class BaseThemeDao
  extends SQDIDao<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme>
	implements IBaseThemeDao {
	
	static Find      = new DaoQueryDecorators<ThemeESelect>();
	static FindOne   = new DaoQueryDecorators<ThemeESelect>();
	static Search    = new DaoQueryDecorators<ThemeESelect>();
	static SearchOne = new DaoQueryDecorators<ThemeESelect>();
	static Save(
		config: ThemeGraph
	): PropertyDecorator {
		return Dao.BaseSave<ThemeGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseTopicDao
  extends IDao<ITopic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> {
}

export class BaseTopicDao
  extends SQDIDao<ITopic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic>
	implements IBaseTopicDao {
	
	static Find      = new DaoQueryDecorators<TopicESelect>();
	static FindOne   = new DaoQueryDecorators<TopicESelect>();
	static Search    = new DaoQueryDecorators<TopicESelect>();
	static SearchOne = new DaoQueryDecorators<TopicESelect>();
	static Save(
		config: TopicGraph
	): PropertyDecorator {
		return Dao.BaseSave<TopicGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseUserTopicFavoriteDao
  extends IDao<IUserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite> {
}

export class BaseUserTopicFavoriteDao
  extends SQDIDao<IUserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite>
	implements IBaseUserTopicFavoriteDao {
	
	static Find      = new DaoQueryDecorators<UserTopicFavoriteESelect>();
	static FindOne   = new DaoQueryDecorators<UserTopicFavoriteESelect>();
	static Search    = new DaoQueryDecorators<UserTopicFavoriteESelect>();
	static SearchOne = new DaoQueryDecorators<UserTopicFavoriteESelect>();
	static Save(
		config: UserTopicFavoriteGraph
	): PropertyDecorator {
		return Dao.BaseSave<UserTopicFavoriteGraph>(config);
  }

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}
