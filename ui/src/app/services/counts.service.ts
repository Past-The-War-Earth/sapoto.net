import { Injectable } from '@angular/core';
import { SituationThread } from '@sapoto/main';

@Injectable({
  providedIn: 'root'
})
export class CountsService {

  constructor() { }

  ensureSituationThreadCounts(
    situationThread: SituationThread
  ): void {
    if(!situationThread.counts) {
      situationThread.counts = {
        experiences: 0,
        ideas: 0,
        questions: 0,
        reasons: 0,
        replies: 0
      }
    }
  }

}
