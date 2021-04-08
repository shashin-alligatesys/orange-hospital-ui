import { TestBed } from '@angular/core/testing';

import { DischargeSummaryService } from './discharge-summary.service';

describe('DischargeSummaryService', () => {
  let service: DischargeSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DischargeSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
