import { TestBed } from '@angular/core/testing';

import { LabelSearchService } from './label-search.service';

describe('LabelSearchService', () => {
  let service: LabelSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabelSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
