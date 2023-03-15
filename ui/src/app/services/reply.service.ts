import { Injectable } from '@angular/core';
import { QuestionType, QuestionTypeApi, Reply, SituationThread } from '@sapoto/main';
import { SituationIdea } from '@votecube/votecube';
import { NumberUtilsService } from './number-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  questionTypeApi = new QuestionTypeApi()

  constructor(
    private numberUtilsService: NumberUtilsService
  ) {
  }

  getNewReply(
    situationThread: SituationThread
  ): Reply {
    const reply = new Reply()
    reply.situationThread = situationThread

    return reply
  }

  async getQuestionTypes(): Promise<QuestionType[]> {
    return await this.questionTypeApi.findAll()
  }

  isComment(
    reply: Reply
  ): boolean {
    return reply && !reply.isIdea
      && !reply.isExperience && !reply.isQuestion
  }

  getAccentPercentage(
    ideaSituation: SituationIdea
  ): number {
    return ideaSituation.numberOfAgreements
      ? Math.ceil(ideaSituation.agreementShareTotal / ideaSituation.numberOfAgreements)
      : 0
  }

  getAccentAverage(
    ideaSituation: SituationIdea
  ): string {
    let average = ideaSituation.numberOfAgreements
      ? Math.ceil(ideaSituation.agreementShareTotal / ideaSituation.numberOfAgreements)
      : 0

    if (!average) {
      return ""
    }
    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(average)
  }

  sortBy(
    sortType: 'time' | 'postRating' | 'userRanking' | 'urgency',
    replies: Reply[]
  ): void {
    replies.sort((
      reply1: Reply,
      reply2: Reply
    ) => {
      let value1
      let value2

      switch (sortType) {
        case 'postRating':
          value1 = reply2.numberOfUpRatings - reply2.numberOfDownRatings
          value2 = reply1.numberOfUpRatings - reply1.numberOfDownRatings
          break;
        case 'time':
          return this.getValueSortComparison(reply2.createdAt.getTime(), reply1.createdAt.getTime())
        case 'userRanking':
          return this.getValueSortComparison(reply2.userRating.ranking, reply1.userRating.ranking)
      }

      if (!reply1.isIdea && !reply2.isIdea) {
        return this.getValueSortComparison(value1, value2)
      }
      if (reply1.isIdea && reply2.isIdea) {
        const situationIdea1 = reply1.situationIdea
        const situationIdea2 = reply2.situationIdea
        let value1 = situationIdea2.numberOfUrgencyRatings ? situationIdea2.urgencyTotal / situationIdea2.numberOfUrgencyRatings : 0
        let value2 = situationIdea1.numberOfUrgencyRatings ? situationIdea1.urgencyTotal / situationIdea1.numberOfUrgencyRatings : 0
        let result = this.getValueSortComparison(value1, value2)
        if (result == 0) {
          return this.getValueSortComparison(situationIdea2.numberOfUrgencyRatings, situationIdea1.numberOfUrgencyRatings)
        }
        return result
      }
      if (reply1.isIdea) {
        return -1
      }
      return 1
    })
  }

  getValueSortComparison(
    value1: number | string,
    value2: number | string
  ): -1 | 0 | 1 {
    if (value1 < value2) {
      return -1;
    }
    if (value1 > value2) {
      return 1;
    }
    return 0;
  }

  canHaveIdeas(
    parent: Reply
  ): boolean {
    return !parent
  }

  canHaveExperiences(
    parent: Reply
  ): boolean {
    return !parent || parent.isIdea
  }

  canHaveQuestions(
    parent: Reply
  ): boolean {
    return !parent
      || parent.isIdea
      || parent.isExperience
  }


}
