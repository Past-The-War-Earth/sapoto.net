import { Injectable } from '@angular/core';
import { Reason } from '@votecube/votecube';

@Injectable({
  providedIn: 'root'
})
export class ReasonService {

  reasonId = 1000;

  constructor() {
  }

  getNewReason(): Reason {
    const reason = new Reason()

    return reason
  }

  getVerb(
    reason: Reason
  ) {
    if (reason.enabled) {
      let action = reason.position.action
      if (this.actionHasSuffix(reason)) {
        action += 's'
      }
      return action
    } else {
      let prefix = "doesn't "
      if (!this.actionHasSuffix(reason)) {
        prefix += "don't "
      }

      return prefix + reason.position.action
    }
    return 'unknown verb'
  }

  private actionHasSuffix(
    reason: Reason
  ): boolean {
    if (reason.position.subject) {
      return ['Everyone', 'Everything', 'He', 'It',
        'No one', 'Nothing', 'She', 'Someone',
        'Something', 'That', 'This']
        .indexOf(reason.position.subject) > -1
    }
    return false
  }

  getTotalScoreAndUpdateReasonScores(
    reasons
  ) {
    let numCounted = reasons.length > 3 ? 3 : reasons.length
    let scores
    switch (numCounted) {
      case 0:
        return '1'
      case 1:
        scores = [4]
        break
      case 2:
        scores = [2.5, 1.5]
        break
      default:
        scores = [2.5, 1, 0.5]
    }
    let totalScore = 1
    for (let i = 0; i < reasons.length; i++) {
      const reason = reasons[i]
      if (i >= scores.length) {
        reason.score = 0
        continue
      }
      let score = scores[i]
      if (reason.enabled) {
        totalScore += score
      }
    }

    return totalScore
  }

}
