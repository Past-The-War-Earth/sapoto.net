import { Injectable } from '@angular/core';
import { Reply } from '@sapoto/main';
import { IdeaSituation } from '@votecube/votecube';
import { NumberUtilsService } from './number-utils.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  newReplyId = 1000

  constructor(
    private numberUtilsService: NumberUtilsService,
    private userService: UserService
  ) {
  }


  getNewReply(): Reply {
    return {
      counts: {
        experiences: 0,
        ideas: 0,
        questions: 0,
        reasons: 0,
        replies: 0
      },
      createdAt: new Date(),
      actor: {
        user: this.userService.getUser()
      },
      designations: [],
      eisenhowerMatrix: {
        importance: 0,
        urgency: 0,
        votes: 0,
        user: {
          importance: 0,
          urgency: 0
        }
      },
      id: ++this.newReplyId,
      questionTypes: [],
      ratings: {
        down: 0,
        user: 0,
        up: 0,
      },
      text: '',
      votes: {
        totalPoints: 0,
        users: 0,
      },
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
  ) {
    return reply && !reply.replyTypes.length
  }

  isQuestion(
    reply: Reply
  ) {
    return this.hasADesignation('question', reply)
  }

  isIdea(
    reply: Reply
  ) {
    return this.hasADesignation('idea', reply)
  }

  isExperience(
    reply: Reply
  ) {
    return this.hasADesignation('experience', reply)
  }

  getAccentPercentage(
    ideaSituation: IdeaSituation
  ) {
    let votes = ideaSituation.votes
    let numUsers = votes.users
    return numUsers ? Math.ceil(votes.totalPoints / numUsers) : 0
  }

  getAccentAverage(
    ideaSituation: IdeaSituation
  ) {
    let votes = ideaSituation.votes
    let numUsers = votes.users
    let average = numUsers ? votes.totalPoints / numUsers : 0

    if (!average) {
      return ""
    }
    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(average)
  }

  sortBy(
    sortType: 'time' | 'postRating' | 'userRanking',
    replies: Reply[]
  ) {
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
          return this.getValueSortComparison(reply2.createdBy.ranking, reply1.createdBy.ranking)
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
  ) {
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
  ) {
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
  ) {
    return !parent
  }

  canHaveExperiences(
    parent: Reply
  ) {
    return !parent || this.hasADesignation('idea', parent)
  }

  canHaveQuestions(
    parent: Reply
  ) {
    return !parent
      || this.hasAnyOfDesignations(['idea', 'experience'], parent)
  }


}
