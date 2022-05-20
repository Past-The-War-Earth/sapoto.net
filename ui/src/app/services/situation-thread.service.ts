import { Injectable } from '@angular/core';
import { ITopic } from '@sapoto/core-client';
import { ISituationThread, SituationThreadApiClient } from '@sapoto/main-client'

@Injectable({
  providedIn: 'root'
})
export class SituationThreadService {

  situationThreadApi = new SituationThreadApiClient()

  activeSituationThread: ISituationThread

  constructor() { }

  async addSituationThread(
    situationThread: ISituationThread
  ) {
    try {
      await this.situationThreadApi.addSituationThread(situationThread)
    } catch (e) {
      console.error(e)
    } finally {
      console.log('Situation Thread added.')
    }
  }

  async getSituationThreadById(
    situationThreadId: SituationThread
  )

  async getTopicSituationThreads(
    topic: ITopic
  ): Promise<ISituationThread[]> {
    return await this.situationThreadApi.findWithListingDetailsForATopic(topic)
  }

}
