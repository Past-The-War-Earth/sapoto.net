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


export interface IBaseSituationDuo
  extends IDuo<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation> {
}

export class BaseSituationDuo
  extends SQDIDuo<ISituation, SituationESelect, SituationECreateProperties, SituationEUpdateColumns, SituationEUpdateProperties, SituationEId, SituationGraph, QSituation>
	implements IBaseSituationDuo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseSituationRatingDuo
  extends IDuo<ISituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating> {
}

export class BaseSituationRatingDuo
  extends SQDIDuo<ISituationRating, SituationRatingESelect, SituationRatingECreateProperties, SituationRatingEUpdateColumns, SituationRatingEUpdateProperties, SituationRatingEId, SituationRatingGraph, QSituationRating>
	implements IBaseSituationRatingDuo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseThemeDuo
  extends IDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme> {
}

export class BaseThemeDuo
  extends SQDIDuo<ITheme, ThemeESelect, ThemeECreateProperties, ThemeEUpdateColumns, ThemeEUpdateProperties, ThemeEId, ThemeGraph, QTheme>
	implements IBaseThemeDuo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseTopicDuo
  extends IDuo<ITopic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic> {
}

export class BaseTopicDuo
  extends SQDIDuo<ITopic, TopicESelect, TopicECreateProperties, TopicEUpdateColumns, TopicEUpdateProperties, TopicEId, TopicGraph, QTopic>
	implements IBaseTopicDuo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseUserTopicFavoriteDuo
  extends IDuo<IUserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite> {
}

export class BaseUserTopicFavoriteDuo
  extends SQDIDuo<IUserTopicFavorite, UserTopicFavoriteESelect, UserTopicFavoriteECreateProperties, UserTopicFavoriteEUpdateColumns, UserTopicFavoriteEUpdateProperties, UserTopicFavoriteEId, UserTopicFavoriteGraph, QUserTopicFavorite>
	implements IBaseUserTopicFavoriteDuo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}
