import { TestBed } from '@angular/core/testing';

import { SituationThreadService } from './situation-thread.service';

describe('SituationThreadService', () => {
  let service: SituationThreadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SituationThreadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
