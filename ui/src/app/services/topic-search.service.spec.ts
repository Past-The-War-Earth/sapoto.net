import { TestBed } from '@angular/core/testing';

import { TopicSearchService } from './topic-search.service';

describe('ThemeSearchService', () => {
  let service: TopicSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TopicSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
