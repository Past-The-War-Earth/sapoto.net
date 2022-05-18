import { Injectable } from '@angular/core';
import { ISituation } from '@sapoto/core-client';

@Injectable({
  providedIn: 'root'
})
export class CountsService {

  constructor() { }

  ensureSituationCounts(
    situation: ISituation
  ): void {
    if(!situation.counts) {
      situation.counts = {
        experiences: 0,
        ideas: 0,
        questions: 0,
        reasons: 0,
        replies: 0
      }
    }
  }

}
