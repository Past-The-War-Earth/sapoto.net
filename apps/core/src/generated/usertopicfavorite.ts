import {
	IRepositoryEntity,
} from '@airport/holding-pattern';
import {
	ITopic,
} from './topic';



//////////////////////////////
//     ENTITY INTERFACE     //
//////////////////////////////

export interface IUserTopicFavorite extends IRepositoryEntity {
	
	// Id Properties

	// Id Relations

	// Non-Id Properties
	favorite?: boolean;

	// Non-Id Relations
	topic?: ITopic;

	// Transient Properties

	// Public Methods
	
}


