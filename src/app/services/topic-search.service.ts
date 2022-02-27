import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TopicSearchService implements AutoCompleteService {

  labelAttribute = 'name';

  topics = [{
    id: 1,
    name: 'Children'
  },
  {
    id: 2,
    name: 'Work'
  },
  {
    id: 3,
    name: 'School'
  },
  {
    id: 4,
    name: 'Spouses'
  },
  {
    id: 5,
    name: 'In-Laws'
  },
  {
    id: 6,
    name: 'Friends'
  }]

  situation

  existingLabelMap = {}

  lastTopicId = 1000;

  constructor() { }

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

    let themesObservable = of(this.topics)

    return themesObservable.pipe(
      map(
        (result) => {
          return result
            .filter(
              (theme) => {
                return !this.existingLabelMap[theme.id] && theme.name.toLowerCase().indexOf(
                  keyword.toLowerCase()
                ) > -1;
              }
            );
        }
      )
    );
  }
}
