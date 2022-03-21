import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SituationService {

  newSituationId = 1000;

  constructor() { }

  getNewSituation() {
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
        ranking: 1000
      },
      eisenhowerMatrix: {
        importance: 0,
        urgency: 0,
        votes: 0,
        user: {
          importance: 0,
          urgency: 0
        }
      },
      id: ++this.newSituationId,
      labels: [],
      text: '',
    };
  }

}
