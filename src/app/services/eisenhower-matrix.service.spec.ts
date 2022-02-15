import { TestBed } from '@angular/core/testing';

import { EisenhowerMatrixService } from './eisenhower-matrix.service';

describe('EisenhowerMatrixService', () => {
  let service: EisenhowerMatrixService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EisenhowerMatrixService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
