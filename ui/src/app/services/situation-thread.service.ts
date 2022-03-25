import { Injectable } from '@angular/core';
import { ISituationThread, SituationThreadApiClient } from '@sapoto/main'

@Injectable({
  providedIn: 'root'
})
export class SituationThreadService {

  situationThreadApi = new SituationThreadApiClient()

  constructor() { }

  async addSituationThread(
    situationThread: ISituationThread
  ) {
    try {
      await this.situationThreadApi.addSituationThread(situationThread)
    } catch(e) {
      console.error(e)
    } finally {
      console.log('Situation Thread added.')
    }
  }
}
