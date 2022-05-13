import { Injectable } from '@angular/core';
import { ISituation, ITopic, SituationApiClient } from '@sapoto/core-client';

@Injectable({
  providedIn: 'root'
})
export class SituationService {

  situationApiClient = new SituationApiClient()

  constructor() { }

  async getNewSituation(): Promise<ISituation> {
    return await this.situationApiClient.getNewSituation()
  }

  async getTopicSituations(
    topic: ITopic
  ): Promise<ISituation[]> {
    return await this.situationApiClient.findWithListingDetailsForATopic(topic)
  }

}
