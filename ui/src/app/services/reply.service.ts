import { Injectable } from '@angular/core';
import { Reply, SituationThread } from '@sapoto/main';
import { SituationIdea } from '@votecube/votecube';
import { NumberUtilsService } from './number-utils.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  constructor(
    private numberUtilsService: NumberUtilsService,
    private userService: UserService
  ) {
  }

  getNewReply(
    situationThread: SituationThread
  ): Reply {
    return {
      actor: {
        user: this.userService.getUser()
      },
      createdAt: new Date(),
      ideaReplyUrgencies: [],
      numberOfDownRatings: 0,
      numberOfUpRatings: 0,
      numberOfUrgencyRatings: 0,
      replyTypes: [],
      replyRatings: [],
      situationThread,
      text: '',
      urgencyTotal: 0
    }
  }

  getQuestionTypes(): string[] {
    return [
      'What',
      'Which',
      'Who',
      'Where',
      'Why',
      'When',
      'How',
      'Whose'
    ]
  }

  isComment(
    reply: Reply
  ): boolean {
    return reply && !reply.replyTypes.length
  }

  isQuestion(
    reply: Reply
  ): boolean {
    return this.hasADesignation('question', reply)
  }

  isIdea(
    reply: Reply
  ): boolean {
    return this.hasADesignation('idea', reply)
  }

  isExperience(
    reply: Reply
  ): boolean {
    return this.hasADesignation('experience', reply)
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
      reply1,
      reply2
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
          return this.getValueSortComparison(reply2.actor.user.ranking, reply1.actor.user.ranking)
      }

      const reply1IsIdea = reply1.replyTypes.map(replyType => replyType.type).indexOf('idea') > -1
      const reply2IsIdea = reply2.replyTypes.map(replyType => replyType.type).indexOf('idea') > -1

      if (!reply1IsIdea && !reply2IsIdea) {
        return this.getValueSortComparison(value1, value2)
      }
      if (reply1IsIdea && reply2IsIdea) {
        let value1 = reply2.numberOfUrgencyRatings ? reply2.urgencyTotal / reply2.numberOfUrgencyRatings : 0
        let value2 = reply1.numberOfUrgencyRatings ? reply1.urgencyTotal / reply1.numberOfUrgencyRatings : 0
        let result = this.getValueSortComparison(value1, value2)
        if (result == 0) {
          return this.getValueSortComparison(reply2.numberOfUrgencyRatings, reply1.numberOfUrgencyRatings)
        }
        return result
      }
      if (reply1IsIdea) {
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

  hasAnyOfDesignations(
    designations: ('comment' | 'experience' | 'idea' | 'question')[],
    reply: Reply
  ): boolean {
    for (let i = 0; i < designations.length; i++) {
      if (this.hasADesignation(designations[i], reply)) {
        return true
      }
    }
    return false
  }

  hasADesignation(
    designation: 'comment' | 'experience' | 'idea' | 'question',
    reply: Reply
  ): boolean {
    if (!reply) {
      return false
    }
    if (!reply.replyTypes.length) {
      return false
    }
    return reply.replyTypes.map(replyType => replyType.type).indexOf(designation) > -1
  }

  canHaveIdeas(
    parent: Reply
  ): boolean {
    return !parent
  }

  canHaveExperiences(
    parent: Reply
  ): boolean {
    return !parent || this.hasADesignation('idea', parent)
  }

  canHaveQuestions(
    parent: Reply
  ): boolean {
    return !parent
      || this.hasAnyOfDesignations(['idea', 'experience'], parent)
  }


}
