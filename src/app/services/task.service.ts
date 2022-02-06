import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() {
  }

  getUrgencyClass(
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

  getPriorityClass(
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

}
