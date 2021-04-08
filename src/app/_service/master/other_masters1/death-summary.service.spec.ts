import { TestBed } from '@angular/core/testing';

import { DeathSummaryService } from './death-summary.service';

describe('DeathSummaryService', () => {
  let service: DeathSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeathSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
