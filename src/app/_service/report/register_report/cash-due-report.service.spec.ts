import { TestBed } from '@angular/core/testing';

import { CashDueReportService } from './cash-due-report.service';

describe('CashDueReportService', () => {
  let service: CashDueReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashDueReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
