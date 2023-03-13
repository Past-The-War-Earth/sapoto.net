/* eslint-disable */
import {
	Situation,
} from '../ddl/Situation';
import {
	SituationESelect,
	SituationECreateColumns,
	SituationECreateProperties,
	SituationEUpdateColumns,
	SituationEUpdateProperties,
	SituationEId,
	SituationGraph,
	QSituation,
} from './query/QSituation';
import {
	SituationRating,
} from '../ddl/SituationRating';
import {
	SituationRatingESelect,
	SituationRatingECreateColumns,
	SituationRatingECreateProperties,
	SituationRatingEUpdateColumns,
	SituationRatingEUpdateProperties,
	SituationRatingEId,
	SituationRatingGraph,
	QSituationRating,
} from './query/QSituationRating';
import {
	Theme,
} from '../ddl/Theme';
import {
	ThemeESelect,
	ThemeECreateColumns,
	ThemeECreateProperties,
	ThemeEUpdateColumns,
	ThemeEUpdateProperties,
	ThemeEId,
	ThemeGraph,
	QTheme,
} from './query/QTheme';
import {
	Topic,
} from '../ddl/Topic';
import {
	TopicESelect,
	TopicECreateColumns,
	TopicECreateProperties,
	TopicEUpdateColumns,
	TopicEUpdateProperties,
	TopicEId,
	TopicGraph,
	QTopic,
} from './query/QTopic';
import {
	UserTopicFavorite,
} from '../ddl/UserTopicFavorite';
import {
	UserTopicFavoriteESelect,
	UserTopicFavoriteECreateColumns,
	UserTopicFavoriteECreateProperties,
	UserTopicFavoriteEUpdateColumns,
	UserTopicFavoriteEUpdateProperties,
	UserTopicFavoriteEId,
	UserTopicFavoriteGraph,
	QUserTopicFavorite,
} from './query/QUserTopicFavorite';
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
	DbEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	localhost_colon_8100____at_sapoto_slash_core_diSet,
} from './qApplication';
import {
	DaoQueryDecorators,
	IObservableDao,
	ObservableDao,
} from '@airport/tarmaq-dao';

import Q from './qApplication'

// Application Q object Dependency Injection readiness detection Dao
export class SQDIDao<Entity,
	EntitySelect extends IEntitySelectProperties,
	EntityCreate extends IEntityCreateProperties,
	EntityUpdateColumns extends IEntityUpdateColumns,
	EntityUpdateProperties extends IEntityUpdateProperties,
	DbEntity_LocalId extends IEntityIdProperties,
	EntityCascadeGraph extends IEntityCascadeGraph,
	IQE extends IQEntity>
	extends ObservableDao<Entity,
		EntitySelect,
		EntityCreate,
		EntityUpdateColumns,
		EntityUpdateProperties,
		DbEntity_LocalId,
		EntityCascadeGraph,
		IQE> {

	constructor(
		dbEntityId: DbEntityId
	) {
		super(dbEntityId, Q)
	}
}


export interface IBaseSituationDao
  extends IObservableDao<Situation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}

export class BaseSituationDao
  extends SQDIDao<Situation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation>
	implements IBaseSituationDao {
	
	static Find      = new DaoQueryDecorators<SituationESelect>();
	static FindOne   = new DaoQueryDecorators<SituationESelect>();
	static Search    = new DaoQueryDecorators<SituationESelect>();
	static SearchOne = new DaoQueryDecorators<SituationESelect>();
	static Save(
		config: SituationGraph
	): PropertyDecorator {
		return ObservableDao.BaseSave<SituationGraph>(config);
  }

	static diSet(): boolean {
		return localhost_colon_8100____at_sapoto_slash_core_diSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseSituationRatingDao
  extends IObservableDao<SituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating> {
}

export class BaseSituationRatingDao
  extends SQDIDao<SituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating>
	implements IBaseSituationRatingDao {
	
	static Find      = new DaoQueryDecorators<SituationRatingESelect>();
	static FindOne   = new DaoQueryDecorators<SituationRatingESelect>();
	static Search    = new DaoQueryDecorators<SituationRatingESelect>();
	static SearchOne = new DaoQueryDecorators<SituationRatingESelect>();
	static Save(
		config: SituationRatingGraph
	): PropertyDecorator {
		return ObservableDao.BaseSave<SituationRatingGraph>(config);
  }

	static diSet(): boolean {
		return localhost_colon_8100____at_sapoto_slash_core_diSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseThemeDao
  extends IObservableDao<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}

export class BaseThemeDao
  extends SQDIDao<Theme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme>
	implements IBaseThemeDao {
	
	static Find      = new DaoQueryDecorators<ThemeESelect>();
	static FindOne   = new DaoQueryDecorators<ThemeESelect>();
	static Search    = new DaoQueryDecorators<ThemeESelect>();
	static SearchOne = new DaoQueryDecorators<ThemeESelect>();
	static Save(
		config: ThemeGraph
	): PropertyDecorator {
		return ObservableDao.BaseSave<ThemeGraph>(config);
  }

	static diSet(): boolean {
		return localhost_colon_8100____at_sapoto_slash_core_diSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseTopicDao
  extends IObservableDao<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> {
}

export class BaseTopicDao
  extends SQDIDao<Topic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic>
	implements IBaseTopicDao {
	
	static Find      = new DaoQueryDecorators<TopicESelect>();
	static FindOne   = new DaoQueryDecorators<TopicESelect>();
	static Search    = new DaoQueryDecorators<TopicESelect>();
	static SearchOne = new DaoQueryDecorators<TopicESelect>();
	static Save(
		config: TopicGraph
	): PropertyDecorator {
		return ObservableDao.BaseSave<TopicGraph>(config);
  }

	static diSet(): boolean {
		return localhost_colon_8100____at_sapoto_slash_core_diSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseUserTopicFavoriteDao
  extends IObservableDao<UserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite> {
}

export class BaseUserTopicFavoriteDao
  extends SQDIDao<UserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite>
	implements IBaseUserTopicFavoriteDao {
	
	static Find      = new DaoQueryDecorators<UserTopicFavoriteESelect>();
	static FindOne   = new DaoQueryDecorators<UserTopicFavoriteESelect>();
	static Search    = new DaoQueryDecorators<UserTopicFavoriteESelect>();
	static SearchOne = new DaoQueryDecorators<UserTopicFavoriteESelect>();
	static Save(
		config: UserTopicFavoriteGraph
	): PropertyDecorator {
		return ObservableDao.BaseSave<UserTopicFavoriteGraph>(config);
  }

	static diSet(): boolean {
		return localhost_colon_8100____at_sapoto_slash_core_diSet(4)
	}
	
	constructor() {
		super(4)
	}
}
