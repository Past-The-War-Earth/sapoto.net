import { Injectable } from '@angular/core';
import { ISituation } from '@sapoto/core-client';
import { IReply } from '@sapoto/main-client';
import { NumberUtilsService } from './number-utils.service';

@Injectable({
  providedIn: 'root'
})
export class EisenhowerMatrixService {

  constructor(
    private numberUtilsService: NumberUtilsService
  ) { }

  getImportanceClassName(
    situation: ISituation | IReply,
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situation)
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
    situation: ISituation,
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situation)
    const value = this.getImportanceValue(situation.eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getApproximateImportanceNoDecimalValue(
    situation: ISituation,
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situation)
    const value = this.getImportanceValue(situation.eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

  getPriorityClassName(
    situation: ISituation,
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situation)
    let priority = this.getPriorityValue(situation.eisenhowerMatrix, mode)
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
    situation: ISituation,
    mode: 'edit' | 'show'
  ) {
    this.ensureMatrixPresent(situation)
    const value = this.getPriorityValue(situation.eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getAproximatePriorityNoDecimalValue(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    const value = this.getPriorityValue(eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

  getPriorityValue(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    switch (mode) {
      case 'edit':
        return eisenhowerMatrix.user.priority
      case 'show':
        return eisenhowerMatrix.priority / eisenhowerMatrix.votes
    }
  }

  getUrgencyImageName(
    eisenhowerMatrix,
    mode: 'edit' | 'show',
    listing = false
  ) {
    let urgency = this.getUrgencyValue(eisenhowerMatrix, mode)
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
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    let urgency = this.getUrgencyValue(eisenhowerMatrix, mode)
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

  getUrgencyDisplayValue(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    const value = this.getUrgencyValue(eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithOneDecimalDisplayValue(value)
  }

  getApproximateUrgencyNoDecimalValue(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    const value = this.getUrgencyValue(eisenhowerMatrix, mode)

    return this.numberUtilsService.get1to5WithNoDecimalValue(value)
  }

  isVeryLowUrgency(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    return this.urgencyEquals(eisenhowerMatrix, mode, 1)
  }

  isLowUrgency(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    return this.urgencyEquals(eisenhowerMatrix, mode, 2)
  }

  isAverageUrgency(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    return this.urgencyEquals(eisenhowerMatrix, mode, 3)
  }

  isHighUrgency(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    return this.urgencyEquals(eisenhowerMatrix, mode, 4)
  }

  isVeryHighUrgency(
    eisenhowerMatrix,
    mode: 'edit' | 'show'
  ) {
    return this.urgencyEquals(eisenhowerMatrix, mode, 5)
  }

  getUrgencyValue(
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

  private ensureMatrixPresent(
    situation: ISituation
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
