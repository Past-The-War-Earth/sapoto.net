import { Injectable } from '@angular/core';
import { NumberUtilsService } from './number-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ReplyService {

  newReplyId = 1000

  constructor(
    private numberUtilsService: NumberUtilsService
  ) {
  }


  getNewReply() {
    return {
      counts: {
        experiences: 0,
        ideas: 0,
        questions: 0,
        reasons: 0,
        replies: 0
      },
      createdAt: new Date().getTime(),
      createdBy: {
        username: 'You',
        ranking: 100
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

  getQuestionTypes() {
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
    reply
  ) {
    return reply && !reply.designations.length
  }

  isQuestion(
    reply
  ) {
    return this.hasADesignation('question', reply)
  }

  isIdea(
    reply
  ) {
    return this.hasADesignation('idea', reply)
  }

  isExperience(
    reply
  ) {
    return this.hasADesignation('experience', reply)
  }

  getAccentPercentage(
    idea
  ) {
    let votes = idea.votes
    let numUsers = votes.users
    return numUsers ? Math.ceil(votes.totalPoints / numUsers) : 0
  }

  getAccentAverage(
    idea
  ) {
    let votes = idea.votes
    let numUsers = votes.users
    let average = numUsers ? votes.totalPoints / numUsers : 0

    if (!average) {
      return ""
    }
    return this.numberUtilsService.get5ScaleDisplayValue(average)
  }

  sortBy(
    sortType: 'time' | 'postRating' | 'userRanking',
    replies
  ) {
    replies.sort((
      reply1,
      reply2
    ) => {
      let value1
      let value2

      switch (sortType) {
        case 'postRating':
          value1 = reply2.ratings.up - reply2.ratings.down
          value2 = reply1.ratings.up - reply1.ratings.down
          break;
        case 'time':
          return this.getValueSortComparison(reply2.createdAt, reply1.createdAt)
        case 'userRanking':
          return this.getValueSortComparison(reply2.createdBy.ranking, reply1.createdBy.ranking)
      }

      const reply1IsIdea = reply1.designations.indexOf('idea') > -1
      const reply2IsIdea = reply2.designations.indexOf('idea') > -1

      if (!reply1IsIdea && !reply2IsIdea) {
        return this.getValueSortComparison(value1, value2)
      }
      if (reply1IsIdea && reply2IsIdea) {
        let value1 = reply2.votes.users ? reply2.votes.totalPoints / reply2.votes.users : 0
        let value2 = reply1.votes.users ? reply1.votes.totalPoints / reply1.votes.users : 0
        let result = this.getValueSortComparison(value1, value2)
        if (result == 0) {
          return this.getValueSortComparison(reply2.votes.users, reply1.votes.users)
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
    value1,
    value2
  ) {
    if (value1 < value2) {
      return -1;
    }
    if (value1 > value2) {
      return 1;
    }
    return 0;
  }

  hasAnyOfDesignations(
    designations,
    reply
  ) {
    for (let i = 0; i < designations.length; i++) {
      if (this.hasADesignation(designations[i], reply)) {
        return true
      }
    }
    return false
  }

  hasADesignation(
    designation,
    reply
  ) {
    if (!reply) {
      return false
    }
    if (!reply.designations.length) {
      return false
    }
    return reply.designations.indexOf(designation) > -1
  }

  canHaveIdeas(
    parent
  ) {
    return !parent
  }

  canHaveExperiences(
    parent
  ) {
    return !parent || this.hasADesignation('idea', parent)
  }

  canHaveQuestions(
    parent
  ) {
    return !parent
      || this.hasAnyOfDesignations(['idea', 'experience'], parent)
  }


}
