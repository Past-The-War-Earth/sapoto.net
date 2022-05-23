import { Injectable } from '@angular/core';
import { Situation, SituationApi } from '@sapoto/core';

@Injectable({
  providedIn: 'root'
})
export class SituationService {

  situationApiClient = new SituationApi()

  constructor() { }

  async getNewSituation(): Promise<Situation> {
    return await this.situationApiClient.getNewSituation()
  }

}
