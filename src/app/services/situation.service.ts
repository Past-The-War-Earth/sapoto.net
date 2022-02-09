import { Injectable } from '@angular/core';
import { identity } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SituationService {

  constructor() { }



  getPriorityLevelActive(
    importance,
    level: 1 | 2 | 3 | 4 | 5
  ) {
    if (importance < 30) {
      return ""
    } else if (importance < 50) {
      return level > 2 ? "" : "active";
    } else if (importance < 70) {
      return level > 3 ? "" : "active";
    } else if (importance < 90) {
      return level > 4 ? "" : "active";
    } else {
      return level > 5 ? "" : "active";
    }
  }

  getImportanceClassName(
    importance
  ) {
    if (importance < 30) {
      return "very-low-importance"
    } else if (importance < 50) {
      return "low-importance"
    } else if (importance < 70) {
      return "average-importance"
    } else if (importance < 90) {
      return "high-importance"
    } else {
      return "very-high-importance"
    }
  }

  getPriorityClassName(
    priority
  ) {
    if (priority < 30) {
      return "very-low-priority"
    } else if (priority < 50) {
      return "low-priority"
    } else if (priority < 70) {
      return "average-priority"
    } else if (priority < 90) {
      return "high-priority"
    } else {
      return "very-high-priority"
    }
  }

  getUrgencyImageName(
    urgency,
    listing = false
  ) {
    if (urgency < 30) {
      return "very_low_urgency"
    } else if (urgency < 50) {
      return "low_urgency"
    } else if (urgency < 70) {
      return "average_urgency"
    } else if (urgency < 90) {
      return "high_urgency"
    } else {
      return listing ? "very_high_urgency_listing" : "very_high_urgency"
    }
  }

  getUrgencyClassName(
    urgency
  ) {
    if (urgency < 30) {
      return "very-low-urgency"
    } else if (urgency < 50) {
      return "low-urgency"
    } else if (urgency < 70) {
      return "average-urgency"
    } else if (urgency < 90) {
      return "high-urgency"
    } else {
      return "very-high-urgency"
    }
  }

}
