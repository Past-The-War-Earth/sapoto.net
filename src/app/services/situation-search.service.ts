import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { AutoCompleteService } from 'ionic4-auto-complete';

@Injectable({
  providedIn: 'root'
})
export class SituationSearchService implements AutoCompleteService {

  labelAttribute = 'common';

  private countries: any[] = [];

  constructor(
    private http: HttpClient
  ) {

  }

  getResults(keyword: string): Observable<any[]> {
    let observable: Observable<any>;

    if (this.countries.length === 0) {
      observable = this.http.get('https://restcountries.com/v3.1/all');
    } else {
      observable = of(this.countries);
    }

    return observable.pipe(
      map(
        (result) => {
          return result.map(country => country.name).filter(
            (item) => {
              return item.common.toLowerCase().startsWith(
                keyword.toLowerCase()
              );
            }
          );
        }
      )
    );
  }
}
