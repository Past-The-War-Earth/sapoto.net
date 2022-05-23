import { Injectable } from '@angular/core';
import { SituationThread, SituationThreadApi } from '@sapoto/main'

@Injectable({
  providedIn: 'root'
})
export class SituationThreadService {

  situationThreadApi = new SituationThreadApi()

  activeSituationThread: SituationThread

  constructor() { }

  async addSituationThread(
    situationThread: SituationThread
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
    situationThreadId: string
  ) {
    return await this.situationThreadApi.findById(situationThreadId)
  }

  async getTopicSituationThreads(
    topicId: string
  ): Promise<SituationThread[]> {
    return await this.situationThreadApi.findWithListingDetailsForATopic(topicId)
  }

}
