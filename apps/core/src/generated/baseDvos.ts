/* eslint-disable */
import {
	Situation,
} from '../ddl/situation';
import {
	SituationVDescriptor,
} from './vsituation';
import {
	SituationRating,
} from '../ddl/situationrating';
import {
	SituationRatingVDescriptor,
} from './vsituationrating';
import {
	Theme,
} from '../ddl/theme';
import {
	ThemeVDescriptor,
} from './vtheme';
import {
	Topic,
} from '../ddl/topic';
import {
	TopicVDescriptor,
} from './vtopic';
import {
	UserTopicFavorite,
} from '../ddl/usertopicfavorite';
import {
	UserTopicFavoriteVDescriptor,
} from './vusertopicfavorite';
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


export interface IBaseSituationDvo
  extends IDvo<Situation, SituationVDescriptor> {
}

export class BaseSituationDvo
  extends SQDIDvo<Situation, SituationVDescriptor>
	implements IBaseSituationDvo {

	static diSet(): boolean {
		return duoDiSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseSituationRatingDvo
  extends IDvo<SituationRating, SituationRatingVDescriptor> {
}

export class BaseSituationRatingDvo
  extends SQDIDvo<SituationRating, SituationRatingVDescriptor>
	implements IBaseSituationRatingDvo {

	static diSet(): boolean {
		return duoDiSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseThemeDvo
  extends IDvo<Theme, ThemeVDescriptor> {
}

export class BaseThemeDvo
  extends SQDIDvo<Theme, ThemeVDescriptor>
	implements IBaseThemeDvo {

	static diSet(): boolean {
		return duoDiSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseTopicDvo
  extends IDvo<Topic, TopicVDescriptor> {
}

export class BaseTopicDvo
  extends SQDIDvo<Topic, TopicVDescriptor>
	implements IBaseTopicDvo {

	static diSet(): boolean {
		return duoDiSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseUserTopicFavoriteDvo
  extends IDvo<UserTopicFavorite, UserTopicFavoriteVDescriptor> {
}

export class BaseUserTopicFavoriteDvo
  extends SQDIDvo<UserTopicFavorite, UserTopicFavoriteVDescriptor>
	implements IBaseUserTopicFavoriteDvo {

	static diSet(): boolean {
		return duoDiSet(4)
	}
	
	constructor() {
		super(4)
	}
}
