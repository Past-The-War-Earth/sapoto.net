/* eslint-disable */
import {
	Situation,
} from '../ddl/Situation';
import {
	SituationVDescriptor,
} from './validation/VSituation';
import {
	SituationRating,
} from '../ddl/SituationRating';
import {
	SituationRatingVDescriptor,
} from './validation/VSituationRating';
import {
	Theme,
} from '../ddl/Theme';
import {
	ThemeVDescriptor,
} from './validation/VTheme';
import {
	Topic,
} from '../ddl/Topic';
import {
	TopicVDescriptor,
} from './validation/VTopic';
import {
	UserTopicFavorite,
} from '../ddl/UserTopicFavorite';
import {
	UserTopicFavoriteVDescriptor,
} from './validation/VUserTopicFavorite';
import {
	Dvo,
	IDvo,
} from '@airbridge/validate';
import {
	DbEntity_LocalId as DbEntityId,
} from '@airport/ground-control';
import {
	localhost_colon_8100____at_sapoto_slash_core_diSet,
} from './qApplication';

import Q from './qApplication'

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
  extends IDvo<Situation, SituationVDescriptor<Situation>> {
}

export class BaseSituationDvo
  extends SQDIDvo<Situation, SituationVDescriptor<Situation>>
	implements IBaseSituationDvo {

	static diSet(): boolean {
		return localhost_colon_8100____at_sapoto_slash_core_diSet(3)
	}
	
	constructor() {
		super(3)
	}
}


export interface IBaseSituationRatingDvo
  extends IDvo<SituationRating, SituationRatingVDescriptor<SituationRating>> {
}

export class BaseSituationRatingDvo
  extends SQDIDvo<SituationRating, SituationRatingVDescriptor<SituationRating>>
	implements IBaseSituationRatingDvo {

	static diSet(): boolean {
		return localhost_colon_8100____at_sapoto_slash_core_diSet(0)
	}
	
	constructor() {
		super(0)
	}
}


export interface IBaseThemeDvo
  extends IDvo<Theme, ThemeVDescriptor<Theme>> {
}

export class BaseThemeDvo
  extends SQDIDvo<Theme, ThemeVDescriptor<Theme>>
	implements IBaseThemeDvo {

	static diSet(): boolean {
		return localhost_colon_8100____at_sapoto_slash_core_diSet(1)
	}
	
	constructor() {
		super(1)
	}
}


export interface IBaseTopicDvo
  extends IDvo<Topic, TopicVDescriptor<Topic>> {
}

export class BaseTopicDvo
  extends SQDIDvo<Topic, TopicVDescriptor<Topic>>
	implements IBaseTopicDvo {

	static diSet(): boolean {
		return localhost_colon_8100____at_sapoto_slash_core_diSet(2)
	}
	
	constructor() {
		super(2)
	}
}


export interface IBaseUserTopicFavoriteDvo
  extends IDvo<UserTopicFavorite, UserTopicFavoriteVDescriptor<UserTopicFavorite>> {
}

export class BaseUserTopicFavoriteDvo
  extends SQDIDvo<UserTopicFavorite, UserTopicFavoriteVDescriptor<UserTopicFavorite>>
	implements IBaseUserTopicFavoriteDvo {

	static diSet(): boolean {
		return localhost_colon_8100____at_sapoto_slash_core_diSet(4)
	}
	
	constructor() {
		super(4)
	}
}
