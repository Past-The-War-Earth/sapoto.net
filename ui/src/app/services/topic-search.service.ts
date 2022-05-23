import { Injectable } from '@angular/core';
import { Topic, TopicApi } from '@sapoto/core';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { from, Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicSearchService implements AutoCompleteService {

  topicApiClient = new TopicApi()

  labelAttribute = 'name';

  situation

  existingLabelMap = {}

  lastTopicId = 1000;

  constructor() { }

  async getById(
    topicId: string
  ): Promise<Topic> {
    return await this.topicApiClient.getById(topicId);
  }

  async addTopic(
    topicName
  ): Promise<any> {
    return {
      id: ++this.lastTopicId,
      name: topicName
    }
  }

  setSituation(
    situation
  ) {
    this.existingLabelMap = {}
    for (let label of situation.labels) {
      this.existingLabelMap[label.id] = true
    }
  }

  getResults(keyword: string): Observable<any[]> {
    if (!keyword || typeof keyword !== 'string') {
      return of([])
    }

    let topicsObservable = from(this.topicApiClient.findAll())

    return topicsObservable.pipe(
      map(
        (result) => {
          return result
            .filter(
              (theme) => {
                return theme.name.toLowerCase().indexOf(
                  keyword.toLowerCase()
                ) > -1;
              }
            );
        }
      )
    );
  }

  async getTopics() {

  }
}
