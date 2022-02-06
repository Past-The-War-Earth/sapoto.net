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

  getUrgencyImageName(
    urgency
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
      return "very_high_urgency"
    }
  }

}
