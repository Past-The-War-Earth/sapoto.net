import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { forkJoin, merge, Observable, of } from 'rxjs';

import { AutoCompleteService } from 'ionic4-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class SituationSearchService implements AutoCompleteService {

  labelAttribute = 'common';

  private countries: any[] = [];

  private labels = [{
    type: 'label',
    text: 'abc label'
  }, {
    type: 'label',
    text: 'bcd a very, very long label, indeed.'
  }, {
    type: 'label',
    text: 'cde - THE COOLEST LABEL'
  }, {
    type: 'label',
    text: 'def - An Interesting Label'
  }, {
    type: 'label',
    text: 'efg'
  }]

  private situations = [{
    type: 'situation',
    text: 'abc'
  }, {
    type: 'situation',
    text: 'bcd'
  }, {
    type: 'situation',
    text: 'cde'
  }, {
    type: 'situation',
    text: 'def'
  }, {
    type: 'situation',
    text: 'efg'
  }]

  constructor(
    private http: HttpClient
  ) {

  }

  getResults(keyword: string): Observable<any[]> {
    // let observable: Observable<any>;

    // if (this.countries.length === 0) {
    //   observable = this.http.get('https://restcountries.com/v3.1/all');
    // } else {
    //   observable = of(this.countries);
    // }

    let labelsObservable = of(this.labels)
    let situationsObservable = of(this.situations)

    const observable = forkJoin([labelsObservable, situationsObservable])
      .pipe(
        map(([s1, s2]) => [...s1, ...s2])
      )

    return observable.pipe(
      map(
        (result) => {
          return result
            // .map(country => country.name)
            .filter(
              (item) => {
                return item.text.toLowerCase().indexOf(
                  keyword.toLowerCase()
                ) > -1;
              }
            );
        }
      )
    );
  }
}
