import { TestBed } from '@angular/core/testing';

import { SituationSearchService } from './situation-search.service';

describe('SituationSearchService', () => {
  let service: SituationSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituationSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
