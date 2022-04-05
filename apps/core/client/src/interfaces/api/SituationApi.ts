import {
    IUser
} from '@airport/travel-document-checkpoint-client'
import {
    ISituation,
    ISituationRating
} from '@sapoto/core/lib/generated/generated'

export interface ISituationApi {

    save(
        situation: ISituation
    ): Promise<void>

    rateSituation(
        situation: ISituation,
        importanceRating: 1 | 2 | 3 | 4 | 5,
        urgencyRating: 1 | 2 | 3 | 4 | 5,
        user: IUser
    ): Promise<ISituationRating>

}