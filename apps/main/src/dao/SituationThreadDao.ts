import { DI } from "@airport/di";
import {
    BaseSituationThreadDao,
    IBaseSituationThreadDao,
    ISituationThread
} from "../generated/generated";
import { SITUATION_THREAD_DAO } from "../server-tokens";

export interface ISituationThreadDao
    extends IBaseSituationThreadDao {

    add(
        situationThread: ISituationThread
    ): Promise<void>

}

export class SituationThreadDao
    extends BaseSituationThreadDao
    implements ISituationThreadDao {

    async add(
        situationThread: ISituationThread
    ): Promise<void> {
        await this.save(situationThread)
    }

}
DI.set(SITUATION_THREAD_DAO, SituationThreadDao)
