import { Injectable } from '@angular/core';
import { Situation, SituationRating } from '@sapoto/core';
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
  ): string {
    let importance = this.getImportanceValue(situation, mode)
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
  ): string {
    const value = this.getImportanceValue(situation, mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getApproximateImportanceNoDecimalValue(
    situation: Situation,
    mode: 'edit' | 'show'
  ): number {
    const value = this.getImportanceValue(situation, mode)

    return this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

  getPriorityClassName(
    reply: Reply,
    mode: 'edit' | 'show'
  ): string {
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
  ): string {
    const value = this.getPriorityValue(reply, mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getAproximatePriorityNoDecimalValue(
    reply: Reply,
    mode: 'edit' | 'show'
  ): number {
    const value = this.getPriorityValue(reply, mode)

    return this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

  getPriorityValue(
    reply: Reply,
    mode: 'edit' | 'show'
  ): number {
    if (!reply.isIdea) {
      return 0
    }
    switch (mode) {
      case 'edit':
        return reply.situationIdea.userIdeaRating.priorityRating
      case 'show':
        const situationIdea = reply.situationIdea
        return situationIdea.numberOfPriorityRatings
          ? situationIdea.priorityTotal / situationIdea.numberOfPriorityRatings
          : 0
    }
  }

  getReplyUrgencyImageName(
    replyOrSituation: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show',
    listing = false
  ): string {
    let urgency = this.getUrgencyValue(replyOrSituation, type, mode)
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
  ): string {
    let urgency = this.getUrgencyValue(replyOrSituation, type, mode)
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
  ): string {
    const value = this.getUrgencyValue(reply, 'reply', mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getSituationUrgencyDisplayValue(
    situation: Situation,
    mode: 'edit' | 'show'
  ): string {
    const value = this.getUrgencyValue(situation, 'situation', mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getApproximateUrgencyNoDecimalValue(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ): number {
    const value = this.getUrgencyValue(situationOrReply, type, mode)

    return this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

  isVeryLowUrgency(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ): boolean {
    return this.urgencyEquals(situationOrReply, type, mode, 1)
  }

  isLowUrgency(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ): boolean {
    return this.urgencyEquals(situationOrReply, type, mode, 2)
  }

  isAverageUrgency(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ): boolean {
    return this.urgencyEquals(situationOrReply, type, mode, 3)
  }

  isHighUrgency(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ): boolean {
    return this.urgencyEquals(situationOrReply, type, mode, 4)
  }

  isVeryHighUrgency(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ): boolean {
    return this.urgencyEquals(situationOrReply, type, mode, 5)
  }

  private getUrgencyValue(
    situationOrReply: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show'
  ): number {
    switch (mode) {
      case 'edit':
        switch (type) {
          case 'reply':
            return (situationOrReply as Reply).situationIdea.userIdeaRating.urgencyRating
          case 'situation':
            return (situationOrReply as Situation).userRating.urgencyRating
        }
      case 'show':
        switch (type) {
          case 'reply':
            const situationIdea = (situationOrReply as Reply).situationIdea
            return situationIdea.urgencyTotal / situationIdea.numberOfUrgencyRatings
          case 'situation':
            return (situationOrReply as Situation).numberOfUrgencyRatings
              ? (situationOrReply as Situation).urgencyTotal
              / (situationOrReply as Situation).numberOfUrgencyRatings
              : 0
        }
    }

    return 0
  }

  private getImportanceValue(
    situation: Situation,
    mode: 'edit' | 'show'
  ): number {
    switch (mode) {
      case 'edit':
        return situation.userRating.importanceRating
      case 'show':
        return situation.importanceTotal / situation.numberOfImportanceRatings
    }
  }

  private urgencyEquals(
    situation: Situation | Reply,
    type: 'situation' | 'reply',
    mode: 'edit' | 'show',
    equalsToValue: number
  ): boolean {
    const value = this.getUrgencyValue(situation, type, mode)

    return equalsToValue === this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

}
