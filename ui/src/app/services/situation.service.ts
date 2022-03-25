import { Injectable } from '@angular/core';
import { ISituation, ITopic } from '@sapoto/core';

@Injectable({
  providedIn: 'root'
})
export class SituationService {

  constructor() { }

  getNewSituation(
    text: string,
    topic: ITopic
  ): ISituation {
    return {
      actor: null,
      actorRecordId: null,
      ageSuitability: 0,
      counts: {
        experiences: 0,
        ideas: 0,
        questions: 0,
        reasons: 0,
        replies: 0
      },
      repository: null,
      eisenhowerMatrix: {
        importance: 0,
        urgency: 0,
        votes: 0,
        user: {
          importance: 0,
          urgency: 0
        }
      },
      text,
      topic
    };
  }

}
