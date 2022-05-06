import { Injected } from "@airport/direction-indicator";
import {
    BaseSituationThreadDao,
    IBaseSituationThreadDao,
    ISituationThread
} from "../generated/generated";

export interface ISituationThreadDao
    extends IBaseSituationThreadDao {

    add(
        situationThread: ISituationThread
    ): Promise<void>

}

@Injected()
export class SituationThreadDao
    extends BaseSituationThreadDao
    implements ISituationThreadDao {

    async add(
        situationThread: ISituationThread
    ): Promise<void> {
        await this.save(situationThread)
    }

}
