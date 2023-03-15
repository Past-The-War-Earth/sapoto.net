import { Api } from "@airport/air-traffic-control";
import { Inject, Injected } from "@airport/direction-indicator";
import { QuestionTypeDao } from "../dao/QuestionTypeDao";
import { QuestionType } from "../ddl/QuestionType";

@Injected()
export class QuestionTypeApi {

    @Inject()
    questionTypeDao: QuestionTypeDao

    @Api()
    async findAll(): Promise<QuestionType[]> {
        return await this.questionTypeDao.findAll()
    }

}
