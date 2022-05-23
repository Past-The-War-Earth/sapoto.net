import { Injectable } from '@angular/core';
import { Situation } from '@sapoto/core';
import { Reply } from '@sapoto/main';
import { NumberUtilsService } from './number-utils.service';

@Injectable({
  providedIn: 'root'
})
export class EisenhowerMatrixService {

  constructor(
    private numberUtilsService: NumberUtilsService
  ) { }

  getImportanceClassName(
    situation: Situation,
    mode: 'edit' | 'show'
  ) {
    this.ensureSituationMatrixPresent(situation)
    let importance = this.getImportanceValue(situation.eisenhowerMatrix, mode)
    if (importance < 1.5) {
      return "very-low-importance"
    } else if (importance < 2.5) {
      return "low-importance"
    } else if (importance < 3.5) {
      return "average-importance"
    } else if (importance < 4.5) {
      return "high-importance"
    } else {
      return "very-high-importance"
    }
  }

  getImportanceDisplayValue(
    situation: Situation,
    mode: 'edit' | 'show'
  ) {
    this.ensureSituationMatrixPresent(situation)
    const value = this.getImportanceValue(situation.eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getApproximateImportanceNoDecimalValue(
    situation: Situation,
    mode: 'edit' | 'show'
  ) {
    this.ensureSituationMatrixPresent(situation)
    const value = this.getImportanceValue(situation.eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

  getPriorityClassName(
    reply: Reply,
    mode: 'edit' | 'show'
  ) {
    this.ensureReplyMatrixPresent(reply)
    let priority = this.getPriorityValue(reply, mode)
    if (priority < 1.5) {
      return "very-low-priority"
    } else if (priority < 2.5) {
      return "low-priority"
    } else if (priority < 3.5) {
      return "average-priority"
    } else if (priority < 4.5) {
      return "high-priority"
    } else {
      return "very-high-priority"
    }
  }

  getPriorityDisplayValue(
    reply: Reply,
    mode: 'edit' | 'show'
  ) {
    this.ensureReplyMatrixPresent(reply)
    const value = this.getPriorityValue(reply, mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getAproximatePriorityNoDecimalValue(
    reply: Reply,
    mode: 'edit' | 'show'
  ) {
    this.ensureReplyMatrixPresent(reply)
    const value = this.getPriorityValue(reply, mode)

    return this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

  getPriorityValue(
    reply: Reply,
    mode: 'edit' | 'show'
  ) {
    this.ensureReplyMatrixPresent(reply)
    switch (mode) {
      case 'edit':
        return reply.eisenhowerMatrix.user.priority
      case 'show':
        return reply.eisenhowerMatrix.priority / reply.eisenhowerMatrix.votes
    }
  }

  getReplyUrgencyImageName(
    replyOrSituation: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show',
    listing = false
  ) {
    this.ensureMatrixPresent(replyOrSituation, type)
    let urgency = this.getUrgencyValue(replyOrSituation.eisenhowerMatrix, mode)
    if (urgency < 1.5) {
      return "very_low_urgency"
    } else if (urgency < 2.5) {
      return "low_urgency"
    } else if (urgency < 3.5) {
      return "average_urgency"
    } else if (urgency < 4.5) {
      return "high_urgency"
    } else {
      return listing ? "very_high_urgency_listing" : "very_high_urgency"
    }
  }

  getUrgencyClassName(
    replyOrSituation: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(replyOrSituation, type)
    let urgency = this.getUrgencyValue(replyOrSituation.eisenhowerMatrix, mode)
    if (urgency < 1.5) {
      return "very-low-urgency"
    } else if (urgency < 2.5) {
      return "low-urgency"
    } else if (urgency < 3.5) {
      return "average-urgency"
    } else if (urgency < 4.5) {
      return "high-urgency"
    } else {
      return "very-high-urgency"
    }
  }

  getReplyUrgencyDisplayValue(
    reply: Reply,
    mode: 'edit' | 'show'
  ) {
    this.ensureReplyMatrixPresent(reply)
    const value = this.getUrgencyValue(reply.eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getSituationUrgencyDisplayValue(
    situation: Situation,
    mode: 'edit' | 'show'
  ) {
    this.ensureSituationMatrixPresent(situation)
    const value = this.getUrgencyValue(situation.eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getApproximateUrgencyNoDecimalValue(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situationOrReply, type)
    const value = this.getUrgencyValue(situationOrReply.eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

  isVeryLowUrgency(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situationOrReply, type)
    return this.urgencyEquals(situationOrReply.eisenhowerMatrix, mode, 1)
  }

  isLowUrgency(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situationOrReply, type)
    return this.urgencyEquals(situationOrReply.eisenhowerMatrix, mode, 2)
  }

  isAverageUrgency(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situationOrReply, type)
    return this.urgencyEquals(situationOrReply.eisenhowerMatrix, mode, 3)
  }

  isHighUrgency(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situationOrReply, type)
    return this.urgencyEquals(situationOrReply.eisenhowerMatrix, mode, 4)
  }

  isVeryHighUrgency(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situationOrReply, type)
    return this.urgencyEquals(situationOrReply.eisenhowerMatrix, mode, 5)
  }

  private getUrgencyValue(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    switch (mode) {
      case 'edit':
        return eisenhowerMatrix.user.urgency
      case 'show':
        return eisenhowerMatrix.urgency / eisenhowerMatrix.votes
    }
  }

  private ensureSituationMatrixPresent(
    situation: Situation
  ): void {
    if (!situation.eisenhowerMatrix) {
      situation.eisenhowerMatrix = {
        importance: 1,
        urgency: 1,
        votes: 0,
        user: {
          importance: 1,
          urgency: 1
        }
      }
    }
  }

  private ensureMatrixPresent(
    replyOrSituation: Situation | Reply,
    type: 'situation' | 'reply',
  ): void {
    switch(type) {
      case 'situation':
        this.ensureSituationMatrixPresent(replyOrSituation as Situation)
        break;
      case 'reply':
        this.ensureReplyMatrixPresent(replyOrSituation as Reply)
        break;
      default:
        throw new Error('Uknown eisenhowerMatrix: ' + type + '. Expecting "situation" or "reply"')
    }
  }

  private ensureReplyMatrixPresent(
    reply: Reply
  ): void {
    if (!reply.eisenhowerMatrix) {
      reply.eisenhowerMatrix = {
        priority: 1,
        urgency: 1,
        votes: 0,
        user: {
          priority: 1,
          urgency: 1
        }
      }
    }
  }

  private getImportanceValue(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    switch (mode) {
      case 'edit':
        return eisenhowerMatrix.user.importance
      case 'show':
        return eisenhowerMatrix.importance / eisenhowerMatrix.votes
    }
  }

  private urgencyEquals(
    eisenhowerMatrix,
    mode: 'edit' | 'show',
    equalsToValue
  ) {
    const value = this.getUrgencyValue(eisenhowerMatrix, mode)

    return equalsToValue === this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

}
