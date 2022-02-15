import { Injectable } from '@angular/core';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LabelSearchService implements AutoCompleteService {

  private labels = [{
    id: 1,
    type: 'label',
    text: 'abc label'
  }, {
    id: 2,
    type: 'label',
    text: 'bcd a very, very long label, indeed.'
  }, {
    id: 3,
    type: 'label',
    text: 'cde - THE COOLEST LABEL'
  }, {
    id: 4,
    type: 'label',
    text: 'def - An Interesting Label'
  }, {
    id: 5,
    type: 'label',
    text: 'efg'
  }]

  situation

  existingLabelMap = {}

  constructor() { }

  setSituation(
    situation
  ) {
    this.existingLabelMap = {}
    for (let label of situation.labels) {
      this.existingLabelMap[label.id] = true
    }
  }

  getResults(keyword: string): Observable<any[]> {
    let labelsObservable = of(this.labels)

    return labelsObservable.pipe(
      map(
        (result) => {
          return result
            // .map(country => country.name)
            .filter(
              (item) => {
                return !this.existingLabelMap[item.id] && item.text.toLowerCase().indexOf(
                  keyword.toLowerCase()
                ) > -1;
              }
            );
        }
      )
    );
  }

}
