import { TestBed } from '@angular/core/testing';

import { TaxdemandReportService } from './taxdemand-report.service';

describe('TaxdemandReportService', () => {
  let service: TaxdemandReportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxdemandReportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
