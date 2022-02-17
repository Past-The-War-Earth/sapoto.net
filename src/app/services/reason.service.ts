import { Injectable } from '@angular/core';
import { NumberUtilsService } from './number-utils.service';

@Injectable({
  providedIn: 'root'
})
export class ReasonService {

  reasonId = 1000;

  constructor() {
  }

  getNewReason() {
    return {
      id: ++this.reasonId,
      counted: true,
      enabled: true,
      object: '',
      score: 0,
      text: ``,
      verb: '',
    }
  }

  getVerb(
    reason
  ) {
    if (reason.enabled) {
      switch (reason.verb) {
        case 'helps':
          return 'helps'
        case 'lets':
          return 'lets'
        case 'makes':
          return 'makes'
      }
    } else {
      switch (reason.verb) {
        case 'helps':
          return `doesn't help`
        case 'lets':
          return `doesn't let`
        case 'makes':
          return `doesn't make`
      }
    }
    return 'unknown verb'
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
